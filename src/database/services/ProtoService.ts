import { db } from "@services/database";
import { ProtoModel } from "@database/models/ProtoModel";
import { Raw } from "typeorm";

export type LocalQueryWhereType = Partial<{
  where: Partial<ProtoModel>;
}>;

export type LocalQuerySearchType = Partial<{
  search: string;
}>;

export type LocalQueryParamsType = LocalQueryWhereType & LocalQuerySearchType;

async function createLocalProto({
  title,
  description,
  dateString,
  isStored = false,
}: Partial<ProtoModel>) {
  return await db.transaction(async (trans) => {
    const proto = new ProtoModel();

    proto.title = title;
    proto.description = description;
    proto.dateString = dateString;
    proto.isStored = isStored;

    const response = await trans.save(proto);

    return response;
  });
}

async function updateLocalProto({
  description,
  dateString,
  isStored = false,
}: Partial<ProtoModel>) {
  return await db
    .createQueryBuilder()
    .update(ProtoModel)
    .set({ description, isStored })
    .where("dateString = :dateString", { dateString })
    .execute();
}

async function upsertLocalProto(params: Partial<ProtoModel>) {
  const { dateString } = params;

  const [proto] = await findLocalProtos({ where: { dateString } });

  if (!proto) {
    return await createLocalProto(params);
  }

  return await updateLocalProto(params);
}

async function filterLocalProtos({ search }: LocalQuerySearchType) {
  const parsedSearch = search.toLowerCase();

  const query = Raw((alias) => `LOWER(${alias}) Like LOWER(:value)`, {
    value: `%${parsedSearch}%`,
  }) as any;

  const response = await db.manager.find(ProtoModel, {
    where: [
      {
        title: query,
      },
      {
        description: query,
      },
    ],
    order: {
      dateString: "DESC",
    },
  });

  return response;
}

async function findLocalProtos(params: LocalQueryWhereType) {
  return await db.manager.find(ProtoModel, params && { where: params.where });
}

async function findAllPendingLocalProtos() {
  return await db.manager.find(ProtoModel, {
    where: {
      isStored: false,
    },
  });
}

export {
  createLocalProto,
  updateLocalProto,
  upsertLocalProto,
  filterLocalProtos,
  findLocalProtos,
  findAllPendingLocalProtos,
};
