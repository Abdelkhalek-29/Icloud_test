import { Router } from "express";
import { isValid } from "../../middleware/validation.js";
import { login, register } from "./auth.controller.js";
import { loginSchema, registerSchema } from "./auth.validation.js";
const router = Router();

// register
router.post("/register", register);
router.post("/login", isValid(loginSchema), login);

export default router;
