import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MarkerData, Location } from "@/types/type";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBuilding,
  faShoppingBag,
  faMapMarkerAlt,
  faChurch,
  faHospital,
  faBriefcase,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { store } from "expo-router/build/global-state/router-store";


type IconMapLocationType = {
  building: IconDefinition;
  hotel: IconDefinition;
  store: IconDefinition;
  school: IconDefinition;
  ancient: IconDefinition;
  gorvernment: IconDefinition;
  hospital: IconDefinition;
};

const iconMapLocationType: IconMapLocationType = {
  building: faBuilding,
  hotel: faHospital,
  store: faShoppingBag,
  school: faSchool,
  ancient: faChurch,
  gorvernment: faBriefcase,
  hospital: faHospital,
};
const LocationNearby = ({ currentPark }: { currentPark: MarkerData }) => {
  const [nearLocations, setNearbyLocations] = useState<Location[]>([]);
  const [popularLocations, setPopularLocations] = useState<Location[]>([]);
  useEffect(() => {
    const fetchNearByLocations = async () => {
      try {
        const response = await fetch(
          `http://192.168.42.1:3000/map/api/place/nearbysearch`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              destinationLatitude: currentPark.latitude,
              destinationLongitude: currentPark.longitude,
            }),
          }
        );
        const data = await response.json();
        setNearbyLocations(data.nearLocations);
        setPopularLocations(data.popularLocations);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNearByLocations();
  }, []);
  return (
    <View className="p-4">
      <View className="bg-white p-4 rounded-lg shadow-md">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-bold">Vị trí</Text>
          <TouchableOpacity>
            <Text className="text-blue-500">Xem bản đồ</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-col justify-center items-start gap-y-3 mb-4">
          <Text className="text-sm">
            <FontAwesomeIcon icon={faShoppingBag} />
            {/* {" "} */}
            Khu mua sắm
          </Text>

          <Text className="text-sm">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            {/* {" "} */}
            Gần Hang Gai Street
          </Text>
        </View>
        <Text className="text-sm text-gray-600 mb-4">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <Text>
            15 Ấu Triệu, Phường Hàng Trống, Quận Hoàn Kiếm, Hà Nội, Việt Nam,
            100000
          </Text>
        </Text>
        <View className="flex-row">
          <View className="flex-col flex-1">
            <Text className="font-bold mb-2">Địa điểm lân cận</Text>
            {nearLocations.slice(0, 5).map((location) => (
              <View className="flex-col items-start justify-center">
                <Text>
                  <FontAwesomeIcon icon={iconMapLocationType[location.type]} /> {location.name}
                </Text>
                <Text className="text-gray-400">{location.type}</Text>
                <Text className="text-gray-400">
                  {Math.floor(location.distance * 1000)} m
                </Text>
              </View>
            ))}
          </View>
          <View className="flex-1 flex-col items-start ">
            <Text className="font-bold mb-2">Phổ biến trong khu vực</Text>
            {popularLocations.slice(0, 5).map((location) => (
              <View className="flex-col">
                <Text>
                  <FontAwesomeIcon icon={faChurch} /> {location.name}
                </Text>
                <Text className="text-gray-400">{location.type}</Text>
                <Text className="text-gray-400">
                  {Math.floor(location.distance * 1000)} m
                </Text>
              </View>
            ))}
          </View>
        </View>
        <Text className="text-xs text-gray-400 mt-4">
          Tất cả các khoảng cách được đo bằng đường chim bay. Khoảng cách di
          chuyển thực tế có thể khác.
        </Text>
      </View>
    </View>
  );
};

export default LocationNearby;
