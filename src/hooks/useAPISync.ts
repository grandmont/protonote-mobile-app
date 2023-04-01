import { useMutation } from "@apollo/client";
import * as Localization from "expo-localization";

import { client } from "@services/client";
import {
  findAllPendingLocalProtos,
  updateLocalProto,
  upsertLocalProto,
} from "@database/services/ProtoService";
import {
  CreateProtoMutationDocument,
  UpdateProtoMutationDocument,
  ProtosDocument,
  UpdateDeviceDocument,
} from "@graphql/generated";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useAPISync() {
  const [createMemo] = useMutation(CreateProtoMutationDocument);
  const [updateMemo] = useMutation(UpdateProtoMutationDocument);
  const [updateDevice] = useMutation(UpdateDeviceDocument);

  const storeUserData = async ({ id }) => {
    const { data } = await client.query({
      query: ProtosDocument,
      variables: {
        where: {
          userId: {
            equals: id,
          },
        },
      },
    });

    await Promise.all(
      data.protos.map(
        async (proto) => await upsertLocalProto({ isStored: true, ...proto })
      )
    );
  };

  const syncDeviceData = async () => {
    const storedTimeZone = await AsyncStorage.getItem("timeZone");

    const [{ timeZone }] = Localization.getCalendars();

    if (storedTimeZone === timeZone) return;

    try {
      await updateDevice({
        variables: {
          input: {
            timeZone,
          },
        },
      });

      await AsyncStorage.setItem("timeZone", timeZone);
    } catch (error) {
      console.log(error);
    }
  };

  const syncMemos = async ({ userId }) => {
    const protos = await findAllPendingLocalProtos();

    console.log("syncAPI:", protos.length);

    protos.forEach(async ({ title, description, dateString }) => {
      const { data } = await client.query({
        query: ProtosDocument,
        variables: {
          where: {
            userId: {
              equals: userId,
            },
            dateString: {
              equals: dateString,
            },
          },
        },
      });

      const [memo] = data ? data?.protos : [];

      try {
        if (!memo) {
          const createMemoData = {
            data: {
              title,
              description,
              dateString,
              user: {
                connect: {
                  id: userId,
                },
              },
            },
          };

          await createMemo({ variables: createMemoData });
        } else {
          const updateMemoData = {
            data: {
              description: {
                set: description,
              },
            },
            where: {
              id: memo.id,
            },
          };

          await updateMemo({ variables: updateMemoData });
        }

        await updateLocalProto({ description, dateString, isStored: true });
      } catch (error) {
        console.log("Error syncing API");
        console.error(error);
      }
    });
  };

  const syncAPI = async ({ userId }) => {
    await syncDeviceData();
    await syncMemos({ userId });
  };

  return {
    storeUserData,
    syncAPI,
  };
}
