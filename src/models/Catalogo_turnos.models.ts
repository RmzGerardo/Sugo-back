// Nota: Este import con .ts solo funcionará con ts-node en desarrollo
import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.ts";

export const Catalogo_turnos = sequelize.define(
  "catalogo_turnos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    notas_descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "catalogo_turnos",
    freezeTableName: true,
    timestamps: false,
  }
);
