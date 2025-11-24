import type { Request, Response } from "express";
import { getUsuarios } from "../services/usuarios.services.ts";

export const getAllUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await getUsuarios();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los usuarios", error });
  }
};
