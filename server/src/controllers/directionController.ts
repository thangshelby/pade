import { Request,Response } from 'express'
import axios from 'axios';



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
      return res.status(200).json({ status: 200, coordinates,duration: response.data.routes[0].duration }); 
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  };