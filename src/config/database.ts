import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("postgres", "postgres", "hola2132", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});
