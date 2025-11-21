import { Router } from "express";
import { fetchAllTurnos } from "../controllers/catalogo.controllers.ts";

const router = Router();
router.get("/turnos", fetchAllTurnos);

export default router;
