import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Usuarios } from "../models/Usuarios.model.ts";

// Clave secreta para firmar los tokens (en un entorno real, usar una variable de entorno)
const SECRET_KEY = "Noah2132";

export const login = async (req: Request, res: Response) => {
  const { correo, contrasena } = req.body;
  console.log("Recibido:", correo, contrasena);

  // Busca el usuario en la base de datos
  const usuario = await Usuarios.findOne({ where: { correo, contrasena } });
  console.log("Usuario encontrado:", usuario);

  if (usuario) {
    const token = jwt.sign({ correo }, SECRET_KEY, { expiresIn: "1h" });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: "Credenciales inválidas" });
  }
};
