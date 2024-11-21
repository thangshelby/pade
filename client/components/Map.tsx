import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import MapView, {
  Marker,
  PROVIDER_DEFAULT,
  Polyline,
  Circle,
} from "react-native-maps";
import { icons, customMapStyle } from "@/constants";
import { PlaceValidAfterFilter } from "@/lib/utils";
import { useParkingStore, useLocationStore, useFindPlaceFilter } from "@/store";
import { MarkerData } from "@/types/type";
import { markersData } from "@/constants";

const Map = () => {
  const {
    userLongitude,
    userLatitude,
    userAddress,
    destinationLatitude,
    destinationLongitude,
    destinationAddress,
    setDestinationLocation,
  } = useLocationStore();
  const { setSelectedParking, selectedParking } = useParkingStore();
  const { price, distance, amenities } = useFindPlaceFilter();

  const [markers, setMarkers] = useState<MarkerData[]>(markersData);

  useEffect(() => {
    if (userAddress) {
      const filteredMarkers = PlaceValidAfterFilter({
        myLocation: { latitude: userLatitude!, longitude: userLongitude! },
        places: markersData,
        distance,
        price,
        amenities,
      });
      setMarkers(filteredMarkers);
    }
  }, [userAddress]);

  const loading = false;

  const error = false;
  const [coordinates, setCoordinates] = useState<
    { latitude: number; longitude: number }[]
  >([]);

  const handlePressMarker = (marker: MarkerData) => {
    setSelectedParking(marker);
    setDestinationLocation({
      address: marker.title,
      latitude: marker.latitude,
      longitude: marker.longitude,
    });
  };

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

  
  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      customMapStyle={customMapStyle}
      className="w-full h-full rounded-2xl overflow-hidden z-20"
      tintColor="black"
      mapType="mutedStandard"
      showsPointsOfInterest={false}
      initialRegion={initialRegion}
      region={region}
      // showsUserLocation={true}
      userInterfaceStyle="light"
    >
      {userLatitude &&
        userLongitude &&
        markers.map((marker) => (
          <Marker
            onPress={() => {
              handlePressMarker(marker);
            }}
            key={marker.title}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
          >
            <View className="h-[35px] w-[50px] flex justify-center items-center ">
              <View
                style={{
                  width: 50,
                  height: 20,
                  backgroundColor:
                    destinationAddress && destinationAddress === marker.title
                      ? "#151551"
                      : "white",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "#151551",
                  borderWidth: 2,
                  borderRadius: 100,
                }}
              >
                <Text
                  className={` ${destinationAddress && destinationAddress === marker.title && " text-white"} text-[10px]`}
                >
                  {marker.price}
                </Text>
              </View>
              <View
                className="z-50
                  border-l-[2px] border-[#151551] h-[15px]"
              ></View>
            </View>
          </Marker>
        ))}

      {coordinates.length > 0 && userAddress && (
        <Polyline
          coordinates={coordinates}
          strokeWidth={4}
          strokeColor="gray"
        />
      )}

      {userLatitude && userLongitude && (
        <>
          <Marker
            centerOffset={{ x: 100, y: -60 }}
            coordinate={{
              latitude: userLatitude,
              longitude: userLongitude,
            }}
            title="My Location"
            image={icons.marker}
          />
          <Circle
            center={{ latitude: userLatitude, longitude: userLongitude }}
            radius={Math.floor(distance / 3)}
            strokeColor="rgba(0, 0, 0, 0.1)"
            fillColor="rgba(173, 216, 230, 0.3)"
          />
          <Circle
            center={{ latitude: userLatitude, longitude: userLongitude }}
            radius={Math.floor(distance * (2 / 3))} // Medium circle
            strokeColor="rgba(0, 0, 0, 0.1)"
            fillColor="rgba(173, 216, 230, 0.2)"
          />
          <Circle
            center={{ latitude: userLatitude, longitude: userLongitude }}
            radius={distance} // Largest circle
            strokeColor="rgba(0, 0, 0, 0.1)"
            fillColor="rgba(173, 216, 230, 0.1)"
          />
        </>
      )}
    </MapView>
  );
};

export default Map;
