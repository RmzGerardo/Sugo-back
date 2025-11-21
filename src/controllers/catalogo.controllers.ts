import type { Request, Response } from "express";
import { getAllTurnos } from "../services/catalogo.services.ts";

export const fetchAllTurnos = async (req: Request, res: Response) => {
  try {
    const turnos = await getAllTurnos();
    res.status(200).json(turnos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los turnos", error });
  }
};
