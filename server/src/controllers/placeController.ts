import { Request, Response } from "express";
const useCustomAxios = require("../api/index");
const axios = require("axios");

import { totalDistance, classifyPlaceType } from "../constants";

export const getPlaceDetail = async (req: Request, res: Response) => {
  const placeId = req.params.placeId;
  try {
    const response = await useCustomAxios({
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
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getNearByLocation = async (req: Request, res: Response) => {
  const { destinationLatitude, destinationLongitude } = req.body;
  try {
    const nearLocations = [];
    const popularLocations = [];
    try {
      const response = await useCustomAxios({
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

        const distance = totalDistance([
          { latitude: destinationLatitude, longitude: destinationLongitude },
          {
            latitude: place.geometry.location.lat,
            longitude: place.geometry.location.lng,
          },
        ]);
        const type = classifyPlaceType(place.types);

        if (place.rating > 4) {
          popularLocations.push({
            name: place.name,
            type,
            address: place.vicinity,
            distance: distance,
            rating: place.rating,
          });
        } else {
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
    } catch (error) {
      console.error(error);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAutoComplete = async (req: Request, res: Response) => {
  const initLatLng = "10.8188493310644, 106.62068852710144";
  const input = req.params.input;
  try {
    const response = await useCustomAxios({
      url: "/place/autocomplete/json",
      params: {
        input,
        radius: "100000",
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
  } catch (error) {
    console.log(error);
  }
};
