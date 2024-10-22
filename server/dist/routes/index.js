"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authRouter = require("./auth");
const placeRouter = require("./place");
const route = (app) => {
    app.get("/", (req, res) => {
        res.send("Hello World");
    });
    app.use("/auth", authRouter);
    app.use("/place", placeRouter);
};
exports.default = route;
