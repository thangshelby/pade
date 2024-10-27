import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import MapView, {
  Marker,
  PROVIDER_DEFAULT,
  Polyline,
  Circle,
} from "react-native-maps";
// import MapViewDirections from "react-native-maps-directions";
import { icons } from "@/constants";
import { useFetch } from "@/lib/fetch";
import {
  calculateDriverTimes,
  calculateRegion,
  generateMarkersFromData,
} from "@/lib/map";
import { useDriverStore, useLocationStore } from "@/store";
import { Driver, MarkerData } from "@/types/type";
import { markersData } from "@/constants";

const Map = () => {
  const {
    userLongitude,
    userLatitude,
    destinationLatitude,
    destinationLongitude,
  } = useLocationStore();
  const { selectedDriver, setDrivers } = useDriverStore();

  // const { data: drivers, loading, error } = useFetch<Driver[]>("/(api)/driver");
  const loading = false;

  const error = null;
  const [coordinates, setCoordinates] = useState<
    { latitude: number; longitude: number }[]
  >([]);
  const [markers, setMarkers] = useState<MarkerData[]>(markersData);

  useEffect(() => {
    const fetchCoordinatesDirection = async () => {
      try {
        const response = await fetch(
          "http://192.168.42.1:3000/map/api/direction/directions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              origin: [userLatitude, userLongitude],
              destination: [destinationLatitude, destinationLongitude],
            }),
          }
        );
        const data = await response.json();
        setCoordinates(data.coordinates);
      } catch (error) {
        console.log(error);
      }
    };

    if (destinationLatitude && destinationLongitude) {
      fetchCoordinatesDirection();
    }
  }, [destinationLatitude, destinationLongitude]);

  // useEffect(() => {
  //   if (
  //     markers.length > 0 &&
  //     destinationLatitude !== undefined &&
  //     destinationLongitude !== undefined
  //   ) {
  //     calculateDriverTimes({
  //       markers,
  //       userLatitude,
  //       userLongitude,
  //       destinationLatitude,
  //       destinationLongitude,
  //     }).then((drivers) => {
  //       setDrivers(drivers as MarkerData[]);
  //     });
  //   }
  // }, [markers, destinationLatitude, destinationLongitude]);

  const region = 
  {
    latitude:userLatitude?userLatitude:10.8188493310644,
    longitude:userLongitude?userLongitude:106.62068852710144,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  const initialRegion = {
    latitude: 10.8188493310644,
    longitude: 106.62068852710144,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  // if (loading || (!userLatitude && !userLongitude))
  //   return (
  //     <View className="flex justify-between items-center w-full">
  //       <ActivityIndicator size="small" color="#000" />
  //     </View>
  //   );

  if (error)
    return (
      <View className="flex justify-between items-center w-full">
        <Text>Error: {error}</Text>
      </View>
    );

  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      className="w-full h-full rounded-2xl overflow-hidden z-30"
      tintColor="black"
      mapType="mutedStandard"
      showsPointsOfInterest={false}
      initialRegion={initialRegion}
      region={region}
      showsUserLocation={true}
      userInterfaceStyle="light"
    >
      {userLatitude &&
        userLongitude &&
        markers.map((marker, index) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
            image={
              selectedDriver === +marker.id
                ? icons.selectedMarker
                : icons.marker
            }
          />
        ))}
      {userLatitude && userLongitude && (
        <Marker
          coordinate={{
            latitude: userLatitude,
            longitude: userLongitude,
          }}
          title="My Location"
          image={icons.point}
        />
      )}

      {coordinates.length > 0 && (
        <Polyline
          coordinates={coordinates}
          strokeWidth={4}
          strokeColor="#000"
        />
      )}
    </MapView>
  );
};

export default Map;
