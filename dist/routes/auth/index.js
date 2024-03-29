"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Import controllers
const auth_1 = require("../../controllers/auth");
//instancia de express:
const router = express_1.default.Router();
// /api/auth
router.post("signup", auth_1.signUp);
router.post("signin", auth_1.signIn);
exports.default = router;
