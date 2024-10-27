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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDirections = void 0;
const axios_1 = __importDefault(require("axios"));
const getDirections = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { origin, destination } = req.body;
    const options = {
        method: "GET",
        url: `https://router.project-osrm.org/route/v1/driving/${origin[1]},${origin[0]};${destination[1]},${destination[0]}?geometries=geojson`,
        headers: {
            "content-type": "application/json",
        },
    };
    try {
        const response = yield axios_1.default.request(options);
        const coordinates = [];
        const routes = response.data.routes[0].geometry.coordinates;
        for (let i = 0; i < routes.length; i++) {
            const coordinate = routes[i];
            coordinates.push({
                latitude: coordinate[1],
                longitude: coordinate[0],
            });
            coordinates.push({
                latitude: coordinate[1],
                longitude: coordinate[0],
            });
        }
        return res.status(200).json({ status: 200, coordinates });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});
exports.getDirections = getDirections;
