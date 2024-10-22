export function haversine(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371.0; // Earth radius in kilometers

  // Convert degrees to radians
  const radLat1 = toRadians(lat1);
  const radLon1 = toRadians(lon1);
  const radLat2 = toRadians(lat2);
  const radLon2 = toRadians(lon2);

  // Differences in coordinates
  const dlat = radLat2 - radLat1;
  const dlon = radLon2 - radLon1;

  // Haversine formula
  const a =
    Math.sin(dlat / 2) ** 2 +
    Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(dlon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Distance in kilometers
  return R * c;
}

// Helper function to convert degrees to radians
export function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

// Function to calculate the total distance given an array of coordinates
export const totalDistance = (
  coords: { latitude: number; longitude: number }[]
) => {
  let totalDist = 0;
  for (let i = 0; i < coords.length - 1; i++) {
    const lat1 = coords[i].latitude;
    const lon1 = coords[i].longitude;
    const lat2 = coords[i + 1].latitude;
    const lon2 = coords[i + 1].longitude;
    totalDist += haversine(lat1, lon1, lat2, lon2);
  }
  return totalDist;
};



type BuildingCategoryKey = 'store' | 'school' | 'hospital' | 'ancient' | 'gorvernment' | 'building' | 'hotel';

export const buildingCategories: Record<BuildingCategoryKey, string[]> = {
  store: ["store", "bakery", "food", "cafe", "electronics_store"],
  school: [
    "school",
    "university",
    "library",
    "secondary_school",
    "primary_school",
    "kindergarten",
  ],
  hospital: [
    "insurance_agency",
    "hospital",
    "pharmacy",
    "physiotherapist",
    "veterinary_care",
  ],
  ancient: [
    "museum",
    "art_gallery",
    "church",
    "hindu_temple",
    "mosque",
    "synagogue",
  ],
  gorvernment: [
    "city_hall",
    "courthouse",
    "embassy",
    "fire_station",
    "local_government_office",
    "police",
  ],
  building: ["real_estate_agency", "establishment"],
  hotel: ["lodging", "campground", "rv_park"],
};
export const classifyPlaceType = (types: string[]): string => {
  let result = 'building';
  Object.keys(buildingCategories).forEach(key => {
    const categoryKey = key as BuildingCategoryKey;
    if (buildingCategories[categoryKey].includes(types[0])) {
      result = categoryKey;
    }
  });
  return result;
} 
