import { useState } from "react";

import {
  filterLocalProtos,
  findLocalProtos,
} from "@database/services/ProtoService";
import { ProtoModel } from "@database/models/ProtoModel";

type LocalDataType = "proto" | "filterProto";

type LocalQueryWhereType = {
  where: Partial<ProtoModel>;
};

type LocalQuerySearchType = {
  search: string;
};

type LocalQueryParamsType = LocalQueryWhereType | LocalQuerySearchType;

export default function useLocalQuery(type: LocalDataType) {
  const [data, setData] = useState<ProtoModel[]>([]);
  const [loading, setLoading] = useState(true);

  // Proto
  const fetchProtos = async ({ where }: LocalQueryWhereType) => {
    const response = await findLocalProtos(where);

    setData(response);
    setLoading(false);
  };

  const filterProtos = async ({ search }: LocalQuerySearchType) => {
    const response = await filterLocalProtos(search);
    setData(response);
    setLoading(false);
  };

  const fetchData = async (params: LocalQueryParamsType) => {
    if (type === "proto") {
      await fetchProtos(params as LocalQueryWhereType);
    }

    if (type === "filterProto") {
      await filterProtos(params as LocalQuerySearchType);
    }
  };

  const refetch = async (params: LocalQueryParamsType) => {
    await fetchData(params);
  };

  return {
    data,
    loading,
    refetch,
  };
}
