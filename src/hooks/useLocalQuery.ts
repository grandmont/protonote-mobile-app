import { useState } from "react";

import { findLocalProtos } from "@database/services/ProtoService";
import { ProtoModel } from "@database/models/ProtoModel";

type LocalDataType = "proto";

interface LocalQueryWhereInterface {
  where: Partial<ProtoModel>;
}

export default function useLocalQuery(
  type: LocalDataType,
  { where }: LocalQueryWhereInterface
) {
  const [data, setData] = useState<ProtoModel[]>([]);
  const [loading, setLoading] = useState(true);

  // Proto
  const fetchProtos = async () => {
    const response = await findLocalProtos(where);

    setData(response);
    setLoading(false);
  };

  const fetchData = async () => {
    if (type === "proto") {
      await fetchProtos();
    }
  };

  const refetch = async () => {
    await fetchData();
  };

  return {
    data,
    loading,
    refetch,
  };
}
