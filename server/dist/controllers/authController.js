"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const SSMSModel = require("../database/MyModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authModel = new SSMSModel();
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const account = yield authModel.Read({
            tableName: "Users",
            columns: "*",
            filter: `WHERE Email = '${email}'`,
        });
        if (account.length === 0) {
            return res.status(400).json({ message: "Email is not exist" });
        }
        const isCorrectPassword = yield bcrypt.compare(password, account[0].Password);
        if (!isCorrectPassword && account[0].Password !== "1") {
            return res.status(400).json({ message: "Password is not correct" });
        }
        const token = jwt.sign({ email: account[0].Email }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res
            .status(200)
            .json({
            token,
            status: 200,
            message: "Sign In Successfully",
            user: account[0],
        });
    }
    catch (e) {
        return res.status(500).json({ message: "Internal server error" });
    }
});
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_type, email, user_name, password, birthday, phone } = req.body;
    const authModel = new SSMSModel();
    try {
        const hashPassword = yield bcrypt.hash(password, 12);
        const user = yield authModel.Create({
            tableName: "Users",
            columns: "UserType,UserName,Email,Birth,Phone,Password",
            values: `'${user_type}','${user_name}','${email}','${birthday}','${phone}','${hashPassword}'`,
        });
        res
            .status(200)
            .json({ status: 200, message: "Create user successfully", user: user });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
const users = [
    {
        Email: "ngothang@gmail.com",
        Name: "Thang Ngo",
        Password: "1234",
    },
];
module.exports = { login, signup };
