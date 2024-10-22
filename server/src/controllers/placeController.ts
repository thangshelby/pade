import { Request, Response } from "express";
const axios = require("axios");
import { totalDistance, classifyPlaceType } from "../constants";
const dotenv = require("dotenv");
dotenv.config();

export const geocodePlace = async (req: Request, res: Response) => {
  const address = req.params.address;
  const apiKeys = process.env.MAP_API_KEYS?.split(",");
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
    const response = await axios.request(options);
    return res
      .status(200)
      .json({ status: 200, ...response.data.candidates[0].geometry.location });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getDirections = async (req: Request, res: Response) => {
  let { origin, destination } = req.body;

  const options = {
    method: "GET",
    url: `https://router.project-osrm.org/route/v1/driving/${origin[1]},${origin[0]};${destination[1]},${destination[0]}?geometries=geojson`,
    headers: {
      "content-type": "application/json",
    },
  };
  try {
    const response = await axios.request(options);

    const coordinates: any = [];

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
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const getNearByLocation = async (req: Request, res: Response) => {
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
      const response = await axios.request(options);
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
      return res.status(200).json({ status: 200, nearLocations,popularLocations });
    } catch (error) {
      console.error(error);
    }
  } catch (error) {
    console.log(error);
  }
};
