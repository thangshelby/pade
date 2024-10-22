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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNearByLocation = exports.getDirections = exports.geocodePlace = void 0;
const axios = require("axios");
const constants_1 = require("../constants");
const dotenv = require("dotenv");
dotenv.config();
const geocodePlace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const address = req.params.address;
    const apiKeys = (_a = process.env.MAP_API_KEYS) === null || _a === void 0 ? void 0 : _a.split(",");
    const options = {
        method: "GET",
        url: process.env.GOOGLE_MAPS_API_URL,
        params: {
            input: address,
            inputtype: "textquery",
            fields: "all",
            language: "vn",
        },
        headers: {
            "content-type": "application/json",
            "x-rapidapi-key": apiKeys
                ? apiKeys[1]
                : "d9a1c2ac42msh8c6cd893a9a806ep18de71jsn1bb877d22d60",
            "x-rapidapi-host": "google-map-places.p.rapidapi.com",
        },
    };
    try {
        const response = yield axios.request(options);
        return res
            .status(200)
            .json(Object.assign({ status: 200 }, response.data.candidates[0].geometry.location));
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});
exports.geocodePlace = geocodePlace;
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
        const response = yield axios.request(options);
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
const getNearByLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { destinationLatitude, destinationLongitude } = req.body;
    console.log(destinationLatitude, destinationLongitude);
    try {
        const nearLocations = [];
        const popularLocations = [];
        const options = {
            method: "GET",
            url: "https://google-map-places.p.rapidapi.com/maps/api/place/nearbysearch/json",
            params: {
                location: destinationLatitude + "," + destinationLongitude,
                radius: "1000",
                language: "en",
                opennow: "true",
                rankby: "prominence",
            },
            headers: {
                "x-rapidapi-key": "92cdd112a5msh5bf8e27649898dfp1f2ceejsn013d5dd8d43a",
                "x-rapidapi-host": "google-map-places.p.rapidapi.com",
            },
        };
        try {
            const response = yield axios.request(options);
            const results = response.data.results;
            for (let i = 0; i < results.length; i++) {
                const place = results[i];
                const distance = (0, constants_1.totalDistance)([
                    { latitude: destinationLatitude, longitude: destinationLongitude },
                    {
                        latitude: place.geometry.location.lat,
                        longitude: place.geometry.location.lng,
                    },
                ]);
                const type = (0, constants_1.classifyPlaceType)(place.types);
                if (place.rating > 4) {
                    popularLocations.push({
                        name: place.name,
                        type,
                        address: place.vicinity,
                        distance: distance,
                        rating: place.rating,
                    });
                }
                else {
                    nearLocations.push({
                        name: place.name,
                        type,
                        address: place.vicinity,
                        distance: distance,
                        rating: place.rating,
                    });
                }
            }
            return res.status(200).json({ status: 200, nearLocations, popularLocations });
        }
        catch (error) {
            console.error(error);
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.getNearByLocation = getNearByLocation;
