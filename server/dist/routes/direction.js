"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require('express');
const directionController_1 = require("../controllers/directionController");
const directionRouter = Express.Router();
directionRouter.post('/directions', directionController_1.getDirections);
module.exports = directionRouter;
