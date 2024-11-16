const SSMSModel = require("../database/MyModel");
import { UserType } from "../type";
import { Request, Response } from "express";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authModel = new SSMSModel();

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const account: [UserType] | [] = await authModel.Read({
      tableName: "Users",
      columns: "*",
      filter: `WHERE Email = '${email}'`,
    });
    if (account.length === 0) {
      return res.status(400).json({ message: "Email is not exist" });
    }
    const isCorrectPassword = await bcrypt.compare(
      password,
      account[0].Password
    );

    if (!isCorrectPassword && account[0].Password !== "1") {
      return res.status(400).json({ message: "Password is not correct" });
    }

    const token = jwt.sign(
      { email: account[0].Email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res
      .status(200)
      .json({
        token,
        status: 200,
        message: "Sign In Successfully",
        user: account[0],
      });
  } catch (e) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
const signup = async (req: Request, res: Response) => {
  return res.status(200).json({user:  {
    email: "ngothang@gmail.com",
    name: "Thang Ngo",
    password: "1234",
  },});
  console.log(req.body);
  const { email,name, password } = req.body;
  const authModel = new SSMSModel();

  try {
    const hashPassword = await bcrypt.hash(password, 12);

    const user = await authModel.Create({ 
      tableName: "Users",
      columns: "UserType,UserName,Email,Birth,Phone,Password",
      values: `'','${name}','${email}','','','${hashPassword}'`,
    }); 

    res
      .status(200)
      .json({ status: 200, message: "Create user successfully", user: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const users = [
  {
    email: "ngothang@gmail.com",
    name: "Thang Ngo",
    password: "1234",
  },
];

module.exports = { login, signup };
