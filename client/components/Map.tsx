import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import MapView, {
  Marker,
  PROVIDER_DEFAULT,
  Polyline,
  Circle,
} from "react-native-maps";
import { icons, customMapStyle } from "@/constants";

import { useParkingStore, useLocationStore } from "@/store";
import { MarkerData } from "@/types/type";
import { markersData } from "@/constants";

const Map = () => {
  const {
    userLongitude,
    userLatitude,
    destinationLatitude,
    destinationLongitude,
    destinationAddress,
    setDestinationLocation,
  } = useLocationStore();
  const { selectedParking, setParkings, setSelectedParking } =
    useParkingStore();

  const loading = false;

  const error = false;
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

  const region = {
    latitude: userLatitude ? userLatitude : 10.8188493310644,
    longitude: userLongitude ? userLongitude : 106.62068852710144,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  };

  const initialRegion = {
    latitude: 10.8188493310644,
    longitude: 106.62068852710144,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  if (loading)
    return (
      <View className="flex justify-between items-center w-full">
        <ActivityIndicator size="small" color="#000" />
      </View>
    );

  if (error)
    return (
      <View className="flex justify-between items-center w-full">
        <Text>Error: {error}</Text>
      </View>
    );
    console.log(userLatitude, userLongitude)
  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      customMapStyle={customMapStyle}
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
            onPress={() => {
              setSelectedParking(index);
              setDestinationLocation({
                address: marker.title,
                latitude: marker.latitude,
                longitude: marker.longitude,
              });
            }}
            key={marker.title}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
            // image={selectedParking === +marker.id ? icons.point : icons.pin}
          >
            <View
              className={`bg-white relative ${destinationAddress && destinationAddress === marker.title && "bg-blue-500 text-white"}  p-1 border-[1px] border-[#151551] rounded-full`}
            >
              <Text
                className={` ${destinationAddress && destinationAddress === marker.title && " text-white"}`}
              >
                {marker.price}
              </Text>
              {/* <View className="absolute top-5 left-[50%] z-40">
              <Text className="text-blue">sasdsaad</Text>
            </View> */}
            </View>
          </Marker>
        ))}

      {coordinates.length > 0 && (
        <Polyline
          coordinates={coordinates}
          strokeWidth={4}
          strokeColor="#000"
        />
      )}
      {userLatitude && userLongitude && (
        <>
          <Marker
            coordinate={{
              latitude: userLatitude,
              longitude: userLongitude,
            }}
            title="My Location"
            image={icons.marker}
          />
          <Circle
            center={{ latitude: userLatitude, longitude: userLongitude }}
            radius={300}
            strokeColor="rgba(0, 0, 0, 0.1)"
            fillColor="rgba(173, 216, 230, 0.3)"
          />
          <Circle
            center={{ latitude: userLatitude, longitude: userLongitude }}
            radius={600} // Medium circle
            strokeColor="rgba(0, 0, 0, 0.1)"
            fillColor="rgba(173, 216, 230, 0.2)"
          />
          <Circle
            center={{ latitude: userLatitude, longitude: userLongitude }}
            radius={900} // Largest circle
            strokeColor="rgba(0, 0, 0, 0.1)"
            fillColor="rgba(173, 216, 230, 0.1)"
          />
        </>
      )}
    </MapView>
  );
};

export default Map;
