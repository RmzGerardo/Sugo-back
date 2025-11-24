import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Usuarios = sequelize.define(
  "usuarios",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "usuarios",
    freezeTableName: true,
    timestamps: false,
  }
);
