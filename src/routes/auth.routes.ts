import { Router } from "express";
import { login } from "../auth/auth.controller.ts";

const router = Router();
router.post("/login", login);

export default router;
