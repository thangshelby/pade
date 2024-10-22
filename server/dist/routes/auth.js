"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { login, signup } = require("../controllers/authController");
const authRouter = (0, express_1.Router)();
authRouter.post('/login', login);
authRouter.post('/signup', signup);
module.exports = authRouter;
