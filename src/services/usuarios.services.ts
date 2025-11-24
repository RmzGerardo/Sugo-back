import { Usuarios } from "../models/Usuarios.model.ts";

export const getUsuarios = async () => {
  const usuarios = await Usuarios.findAll();
  console.log("Usuarios encontrados:", usuarios);
  return usuarios;
};
