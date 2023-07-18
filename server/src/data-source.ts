import "reflect-metadata"
import { DataSource } from "typeorm"
import { Game } from "./entity/Game"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: +process.env.PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
  logging: false,
  entities: [Game],
  migrations: [],
  subscribers: [],
});
