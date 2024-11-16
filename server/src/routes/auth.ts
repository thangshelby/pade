import { Router } from "express";
const { login, signup } = require("../controllers/authController");

const authRouter= Router();
authRouter.post('/login',login)
authRouter.post('/sign-up',signup)

module.exports = authRouter;