import { useState } from "react";

import {
  filterLocalProtos,
  findLocalProtos,
  LocalQueryParamsType,
} from "@database/services/ProtoService";
import { ProtoModel } from "@database/models/ProtoModel";

type LocalDataType = "proto" | "filterProto";

export default function useLocalQuery(type: LocalDataType) {
  const [data, setData] = useState<ProtoModel[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (params?: LocalQueryParamsType) => {
    const response = await {
      proto: findLocalProtos,
      filterProto: filterLocalProtos,
    }[type](params);

    setData(response);
    setLoading(false);
  };

  const refetch = async (params?: LocalQueryParamsType) => {
    await fetchData(params);
  };

  return {
    data,
    loading,
    refetch,
  };
}
