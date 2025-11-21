import { Catalogo_turnos } from "../models/Catalogo_turnos.models.ts";

export const getAllTurnos = async () => {
  const turnos = await Catalogo_turnos.findAll();
  console.log("Turnos encontrados:", turnos);
  return turnos;
};
