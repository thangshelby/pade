
import { Ride, MarkerData } from "@/types/type";

export const sortRides = (rides: Ride[]): Ride[] => {
  const result = rides.sort((a, b) => {
    const dateA = new Date(`${a.created_at}T${a.ride_time}`);
    const dateB = new Date(`${b.created_at}T${b.ride_time}`);
    return dateB.getTime() - dateA.getTime();
  });

  return result.reverse();
};

export function formatTime(dateString: string): string {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedMinutes = +minutes?.toFixed(0) || 0;

  if (formattedMinutes < 60) {
    return `${hours == 0 ? 12 : hours} h ${minutes > 0 ? minutes : ""} `;
  } else {
    const hours = Math.floor(formattedMinutes / 60);
    const remainingMinutes = formattedMinutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day < 10 ? "0" + day : day} ${month} ${year}`;
}

function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const toRadians = (degrees: number) => degrees * (Math.PI / 180);
  const earthRadiusMeters = 6371000; // Radius of the Earth in meters

  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadiusMeters * c;
}

export const PlaceValidAfterFilter = ({
  myLocation,
  places,
  distance,
  price,
  amenities,
}: {
  myLocation: { latitude: number; longitude: number };
  places: MarkerData[];
  distance: number;
  price: number;
  amenities: string[];
}) => {
  let response: MarkerData[] = [];
 

  response = places.filter((place) => {
    const distanceBetween = calculateDistance(
      place.latitude,
      place.longitude,
      myLocation.latitude,
      myLocation.longitude
    );
    return distanceBetween <= distance;
  });

  // SORTED PRICE
  response= response.filter((place) => parseInt(place.price.split('.')[0]) <= +price);

  // FILTER AMENITIES
  if (amenities?.length!>0) {
    response = response.filter((place) => {
      for (let i = 0; i < amenities!.length; i++) {
        if (place.amenities.includes(amenities![i])) {
          return true;
        }
      }
    });
  }
  

  return response;
};
