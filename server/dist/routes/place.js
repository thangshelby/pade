"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const { geocodePlace, getDirections, getNearByLocation } = require("../controllers/placeController");
const mapRouter = Express.Router();
mapRouter.post('/directions', getDirections);
mapRouter.post("/near_by_search", getNearByLocation);
mapRouter.get("/geocode_place/:address", geocodePlace);
module.exports = mapRouter;
