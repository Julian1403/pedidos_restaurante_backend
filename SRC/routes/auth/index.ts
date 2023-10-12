import express from 'express';
//Import controllers
import { signIn,signUp } from "../../controllers/auth";
//instancia de express:
const router = express.Router();

// /api/auth
router.post("/signup",signUp);
router.post("/signin",signIn);

export default router;