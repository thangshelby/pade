import { Express } from "express";
const authRouter = require("./auth");
const placeRouter = require("./place");

const route = (app: Express) => {
  app.get("/", (req, res) => {
    res.send("Hello World");
  })
  app.use("/auth", authRouter);
  app.use("/place", placeRouter);
};
export default route;
