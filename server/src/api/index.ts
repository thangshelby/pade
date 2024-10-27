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

customAxios.interceptors.response.use(
  (response: any) => {
    return response;
  },
  function (error: any) {
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
  }
);

const useCustomAxios = async ({ url, params }: { url: string; params: {} }) => {
  try {
    const response = await customAxios.get(url, { params });
    return response;
  } catch (error) {
    console.log(error);
    return { message: "Internal server error" };
  }
};

module.exports = useCustomAxios;
