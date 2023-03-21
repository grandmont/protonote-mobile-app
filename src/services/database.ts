import * as SQLite from "expo-sqlite";
import { DataSource, DataSourceOptions } from "typeorm/browser";

import { ProtoModel } from "@database/models/ProtoModel";

export const config: DataSourceOptions = {
  database: "protonote.db",
  type: "expo",
  driver: SQLite,
  entities: [ProtoModel],
  logging: false,
  synchronize: true,
};

export const db = new DataSource(config);
