import { Express } from "express";
const authRouter = require("./auth");
const placeRouter = require("./place");
const directionRouter= require('./direction')
const paymentRouter = require("./payment");
const invoiceRouter = require("./invoice");

const route = (app: Express) => {
  app.use("/invoice", invoiceRouter);
  app.use("/auth", authRouter);
  app.use("/map/api/place", placeRouter);
  app.use("/map/api/direction",directionRouter)
  app.use("/payment", paymentRouter);
};
export default route;
