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
const axios = require("axios");
const apiKeysList = process.env.MAP_API_KEYS;
const apiKeys = apiKeysList
    ? apiKeysList.split(",")
    : ["d9a1c2ac42msh8c6cd893a9a806ep18de71jsn1bb877d22d60"];
const baseURL = "https://google-map-places.p.rapidapi.com/maps/api";
const customAxios = axios.create({ baseURL });
customAxios.defaults.headers.common["x-rapidapi-host"] =
    "google-map-places.p.rapidapi.com";
customAxios.defaults.headers.common["x-rapidapi-key"] = apiKeys[0];
customAxios.interceptors.response.use((response) => {
    return response;
}, function (error) {
    if (error.response.status === 429) {
        let i = 0;
        for (i; i < apiKeys.length; i++) {
            if (error.config.headers["x-rapidapi-key"] === apiKeys[i]) {
                break;
            }
        }
        const validKey = apiKeys
            ? apiKeys[i + 1]
            : "d9a1c2ac42msh8c6cd893a9a806ep18de71jsn1bb877d22d60";
        error.config.headers["x-rapidapi-key"] = validKey;
        return axios.request(error.config);
    }
});
const useCustomAxios = (_a) => __awaiter(void 0, [_a], void 0, function* ({ url, params }) {
    try {
        const response = yield customAxios.get(url, { params });
        return response;
    }
    catch (error) {
        console.log(error);
        return { message: "Internal server error" };
    }
});
module.exports = useCustomAxios;
