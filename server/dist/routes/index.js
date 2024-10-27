"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authRouter = require("./auth");
const placeRouter = require("./place");
const directionRouter = require('./direction');
const route = (app) => {
    app.use("/auth", authRouter);
    app.use("/map/api/place", placeRouter);
    app.use("/map/api/direction", directionRouter);
};
exports.default = route;
