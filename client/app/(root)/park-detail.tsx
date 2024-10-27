import React, { useRef, useEffect, useState, useMemo } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faShoppingBag,
  faMapMarkerAlt,
  faChurch,
  faHospital,
  faTrain,
  faBriefcase,
  faTree,
  faSnowflake,
  faUtensils,
  faConciergeBell,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { useDriverStore } from "@/store";
import { markersData } from "@/constants";
import Navbar from "@/components/Navbar";
import { MarkerData } from "@/types/type";
import { SafeAreaView } from "react-native-safe-area-context";
import LocationNearby from "@/components/LocationNearby";

const ParkDetail = () => {
  const { selectedDriver } = useDriverStore();
  // const currentPark:MarkerData = useMemo(()=>{
  //   const response= markersData.filter((park)=>park.id=== selectedDriver)
  //   return response[0]
  // },[selectedDriver])

  const currentPark = markersData[0];

  const [navbarOpacity, setNavbarOpacity] = useState(0);
  const [currentNavbarItem, setCurrentNavbarItem] = useState("Tổng quan");

  const containerRef = useRef<ScrollView>(null);
  const overallRef = useRef<View>(null);
  const descriptionRef = useRef<View>(null);
  const reviewRef = useRef<View>(null);
  const locationRef = useRef<View>(null);
  const policyRef = useRef<View>(null);

  return (
    <SafeAreaView className="relative">
      <Navbar
        currentNavbarItem={currentNavbarItem}
        handlePress={(item: string) => {
          setCurrentNavbarItem(item);
        }}
        title={currentPark.title}
        navbarOpacity={navbarOpacity}
      />
      <ScrollView
        onScroll={(event) => {
          const navbarOpacity =
            Math.floor(event.nativeEvent.contentOffset.y / 40) * 20;
          setNavbarOpacity(navbarOpacity > 100 ? 100 : navbarOpacity);
        }}
        ref={containerRef}
        className="bg-gray-100 relative flex-col gap-y-2"
      >
        <Image
          source={require("../../assets/images/san1.png")}
          className="w-full h-[350px]"
          resizeMode="cover"
        />

        <View style={styles.box}>
          <View className="bg-white rounded-lg shadow-lg p-2 flex-row items-center justify-center space-x-4">
            <View className="flex-row items-center space-x-2">
              <View className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                <Text className="text-white text-xl font-bold">7.4</Text>
              </View>
              <View className="text-sm">
                <Text className="text-blue-500 font-semibold">25 đánh giá</Text>
                <Text className="text-gray-500">Tiện lợi</Text>
              </View>
            </View>
            <View className="flex-1 ">
              <Text className="text-lg font-semibold text-gray-800">
                Quận Hoàn Kiếm, Hà Nội
              </Text>
              <View
                className="text-sm text-gray-500
               flex-col items-start justify-center gap-y-1"
              >
                <View className="flex-row gap-x-2">
                  <FontAwesomeIcon icon={faShoppingBag} />
                  <Text>Khu mua sắm</Text>
                </View>
                <View className="flex-row gap-x-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <Text>Gần Hang Gai Street</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="bg-white rounded-lg shadow-lg p-4 mt-2 flex-row items-center justify-between">
            <View className="flex-row items-center space-x-2 text-blue-500">
              <FontAwesomeIcon icon={faSnowflake} />
              <Text>Máy lạnh</Text>
            </View>
            <View className="flex-row items-center space-x-2 text-blue-500">
              <FontAwesomeIcon icon={faUtensils} />
              <Text>Nhà hàng</Text>
            </View>
            <View className="flex-row items-center space-x-2 text-blue-500">
              <FontAwesomeIcon icon={faConciergeBell} />
              <Text>Lễ tân 24h</Text>
            </View>
            <View className="flex-row items-center space-x-2 text-blue-500">
              <FontAwesomeIcon icon={faWifi} />
              <Text>WiFi</Text>
            </View>
          </View>
        </View>

        <View style={styles.box}>
          <LocationNearby currentPark={currentPark} />
        </View>
        <View>
          <View className="p-4">
            <View className="bg-white p-4 rounded-lg shadow-md">
              <View className="flex-row justify-between items-center mb-4">
                <Text className="text-lg font-bold">Tiện ích</Text>
                <TouchableOpacity>
                  <Text className="text-blue-500">Xem tất cả</Text>
                </TouchableOpacity>
              </View>
              <View className="bg-blue-100 p-4 rounded-lg text-center text-blue-700 font-bold mb-4">
                <Text>Đừng bỏ lỡ! Chỉ còn 1 phòng có giá này!</Text>
              </View>
              <View className="flex-row justify-between items-center">
                <View>
                  <Text className="text-sm text-gray-600">Giá bắt đầu từ</Text>
                  <Text className="text-2xl text-orange-500 font-bold">
                    VND 529.670
                  </Text>
                  <Text className="text-xs text-gray-400">
                    Tổng giá VND 600.647 bao gồm thuế và phí
                  </Text>
                </View>
                <TouchableOpacity className="bg-orange-500 text-white px-4 py-2 rounded-lg">
                  <Text>Chọn phòng</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ParkDetail;
const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});
