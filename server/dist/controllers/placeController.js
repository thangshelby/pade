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
exports.getAutoComplete = exports.getNearByLocation = exports.getPlaceDetail = void 0;
const useCustomAxios = require("../api/index");
const axios = require("axios");
const constants_1 = require("../constants");
const getPlaceDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const placeId = req.params.placeId;
    try {
        const response = yield useCustomAxios({
            url: "/place/details/json",
            params: {
                place_id: placeId,
                region: "vn",
                fields: "all",
                language: "vn",
                reviews_no_translations: "true",
            },
        });
        return res
            .status(200)
            .json({
            status: 200,
            location: {
                latitude: response.data.result.geometry.location.lat,
                longitude: response.data.result.geometry.location.lng,
            },
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});
exports.getPlaceDetail = getPlaceDetail;
const getNearByLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { destinationLatitude, destinationLongitude } = req.body;
    try {
        const nearLocations = [];
        const popularLocations = [];
        try {
            const response = yield useCustomAxios({
                url: "/place/nearbysearch/json",
                params: {
                    location: destinationLatitude + "," + destinationLongitude,
                    radius: "1000",
                    language: "en",
                    opennow: "true",
                    rankby: "prominence",
                },
            });
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
            return res
                .status(200)
                .json({ status: 200, nearLocations, popularLocations });
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
const getAutoComplete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const initLatLng = "10.8188493310644, 106.62068852710144";
    const input = req.params.input;
    try {
        const response = yield useCustomAxios({
            url: "/place/autocomplete/json",
            params: {
                input,
                radius: "10000",
                strictbounds: "true",
                offset: "3",
                location: initLatLng,
                origin: initLatLng,
                components: "country:vn",
                language: "vn",
                region: "vn",
            },
        });
        const predictedPlaces = [];
        const predictions = response.data.predictions;
        for (let i = 0; i < predictions.length; i++) {
            const prediction = predictions[i];
            predictedPlaces.push({
                id: i,
                placeId: prediction.place_id,
                description: prediction.description,
                distance: prediction.distance_meters,
            });
        }
        return res.status(200).json({ status: 200, predictedPlaces });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAutoComplete = getAutoComplete;
