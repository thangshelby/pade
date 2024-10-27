const Express = require("express");

const {
  getPlaceDetail,
  getNearByLocation,
  getAutoComplete,
} = require("../controllers/placeController");

const mapRouter = Express.Router();

mapRouter.get("/autocomplete/:input", getAutoComplete);
mapRouter.get("/detail/:placeId", getPlaceDetail,);
mapRouter.post("/nearbysearch", getNearByLocation);

module.exports = mapRouter;
