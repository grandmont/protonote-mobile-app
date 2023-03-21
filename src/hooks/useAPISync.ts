import { useMutation } from "@apollo/client";

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
} from "@graphql/generated";

export default function useAPISync() {
  const [createMemo] = useMutation(CreateProtoMutationDocument);
  const [updateMemo] = useMutation(UpdateProtoMutationDocument);

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

  const syncAPI = async ({ id }) => {
    if (!id) return;

    const protos = await findAllPendingLocalProtos();

    // console.log("syncAPI:", protos.length);

    protos.forEach(async ({ title, description, dateString }) => {
      const { data } = await client.query({
        query: ProtosDocument,
        variables: {
          where: {
            userId: {
              equals: id,
            },
            dateString: {
              equals: dateString,
            },
          },
        },
      });

      const [memo] = data ? data?.protos : [];

      const createMemoData = {
        data: {
          title,
          dateString,
          user: {
            connect: {
              id,
            },
          },
        },
      };

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

      try {
        if (!memo) {
          await createMemo({ variables: createMemoData });
        } else {
          await updateMemo({ variables: updateMemoData });
        }

        await updateLocalProto({ description, dateString, isStored: true });
      } catch (error) {
        console.log("Error syncing API");
        console.error(error);
      }
    });
  };

  return {
    storeUserData,
    syncAPI,
  };
}
