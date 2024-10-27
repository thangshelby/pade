import { Express } from "express";
const authRouter = require("./auth");
const placeRouter = require("./place");
const directionRouter= require('./direction')

const route = (app: Express) => {
  app.use("/auth", authRouter);
  app.use("/map/api/place", placeRouter);
  app.use("/map/api/direction",directionRouter)

};
export default route;
