import { Router } from "express";
import { getAllUsuarios } from "../controllers/usuarios.controllers.ts";

const router = Router();
router.get("/", getAllUsuarios);

export default router;
