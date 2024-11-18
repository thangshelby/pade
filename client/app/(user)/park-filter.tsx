import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCar, faCheck, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Slider } from "react-native-awesome-slider";
import { useSharedValue } from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { cars as constCars, amenities as constAmenities } from "@/constants";
import { useNavigation } from "expo-router";
import { useFindPlaceFilter } from "@/store";
import ControlTimeInAndOut from "@/components/ControlTimeInAndOut";

const ParkFilter = () => {
  const navigation = useNavigation();
  const {
    setCars,
    setAmenities,
    setPrice,
    setDistance,
    cars,
    amenities,
    price,
    distance,
  } = useFindPlaceFilter();


  const [selectedCar, setSelectedCar] = useState<
    "Xe 4 chỗ" | "Xe 7 chỗ" | "Xe tải nhỏ" | "Xe tải lớn"
  >(cars);
  const [selectedAmenities, setSelectedAmenities] = useState(amenities);

  const [refresh, setRefresh] = useState(false);

  const currentPrice = useSharedValue(price);
  const minPrice = useSharedValue(0);
  const maxPrice = useSharedValue(100);

  const minDistance = useSharedValue(0);
  const maxDistance = useSharedValue(2000);
  const currentDistance = useSharedValue(distance);

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((item) => item !== amenity)
        : [...prev, amenity]
    );
  };

  const handleSetFindPlaceFilter = async () => {
    await setCars(selectedCar);
    await setAmenities(selectedAmenities);
    await setPrice(currentPrice.value);
    await setDistance(currentDistance.value);
    await Alert.alert("Lưu thành công");
    await navigation.goBack();
  };

  return (
    <SafeAreaView className="w-full h-full">
      <GestureHandlerRootView>
        <ScrollView className="bg-blue-950 text-white h-full p-4">
          {/* HEADER */}
          <View className="flex-row justify-between items-center mb-4">
            <View className="flex-row items-center gap-x-4">
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="white" />
              </TouchableOpacity>
              <Text className="text-xl font-JakartaExtraBold text-white">
                Bộ lọc
              </Text>
            </View>

            <TouchableOpacity onPress={()=>{
              setSelectedCar("Xe 4 chỗ");
              setSelectedAmenities([]);
              setPrice(25);
              currentPrice.value = 25;
              setDistance(500);
              currentDistance.value = 500;
              setRefresh(!refresh);
            }}>
              <Text className="text-yellow-400 font-bold">Đặt lại</Text>
            </TouchableOpacity>
          </View>

          {/* PRICE FILLTER */}
          <View className="mb-4">
            <Text className="mb-2 text-white font-JakartaBold">
              Phí trông/ giữ xe (theo giờ)
            </Text>
            <Slider
              style={{ width: "100%", height: 40, marginTop: 30 }}
              minimumValue={minPrice}
              maximumValue={maxPrice}
              progress={currentPrice}
              onSlidingComplete={(value) => {
                setPrice(value);
                currentPrice.value = value;
                setRefresh(!refresh);
              }}
              theme={{
                maximumTrackTintColor: "#fff",
                cacheTrackTintColor: "#333",
                bubbleBackgroundColor: "#666",
                heartbeatColor: "#999",
              }}
              renderBubble={() => null}
              renderThumb={() => (
                <View className="bg-yellow-400 rounded-full p-2 relative">
                  <View className="mb-3 p-2 rounded-2xl bg-white absolute top-[-40px] left-[-40px]">
                    <Text>{price==25?price: Math.floor(currentPrice.value)}.000đ/giờ</Text>
                  </View>
                </View>
              )}
            />
          </View>
          {/* DISTANCE FILLTER */}
          <View className="mb-4">
            <Text className="mb-8 text-white font-JakartaBold">
              Khoảng cách
            </Text>
            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={minDistance}
              maximumValue={maxDistance}
              progress={currentDistance}
              onSlidingComplete={(value) => {
                setDistance(value);
                currentDistance.value = value;
                setRefresh(!refresh);
              }}
              renderBubble={() => null}
              renderThumb={() => (
                <View className="bg-yellow-400 rounded-full p-2 relative">
                  <View className="mb-3 p-2 rounded-2xl bg-white absolute top-[-40px] left-[-20px]">
                    <Text>{distance==500?distance: Math.floor(currentDistance.value)} m </Text>
                  </View>
                </View>
              )}
            />
          </View>

          {/* TIME FILLTER */}
          <View className="mb-4  flex-col gap-y-3">
            <Text className=" text-white font-JakartaBold">
              Thời gian gửi xe
            </Text>

            <View className="flex-col">
    
              <View className="bg-blue-800 p-4  rounded-2xl shadow-2xl ">
                <ControlTimeInAndOut subTextStyle="true" />
              </View>
            </View>
          </View>

          {/*TYPE CAR FILLTER */}
          <View className="mb-4">
            <Text className="mb-2 text-white font-JakartaBold">
              Loại xe gửi
            </Text>
            <View className="space-y-2">
              {constCars.map((car) => (
                <TouchableOpacity
                  key={car}
                  className={`flex-row items-center p-2 rounded-lg ${
                    selectedCar === car ? "bg-white text-white" : "bg-blue-800"
                  }`}
                  onPress={() => setSelectedCar(car)}
                >
                  <FontAwesomeIcon icon={faCar} color="#151515" />
                  <Text
                    className={`text-white font-JakartaLight ml-2 ${selectedCar == car && "text-black"}`}
                  >
                    {car}
                  </Text>
                  {selectedCar === car ? (
                    <View className="border-[1px] bg-yellow-500 p-1 ml-auto">
                      <FontAwesomeIcon icon={faCheck} color="white" />
                    </View>
                  ) : (
                    <View className="border-[1px] bg-white p-3 ml-auto"></View>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* AMENITIES FILLTER */}

          <View className="mb-4">
            <Text className="mb-2 text-white font-JakartaBold">Tiện ích</Text>
            <View className="flex-row flex-wrap gap-2 ">
              {constAmenities.map((amenity) => (
                <TouchableOpacity
                  key={amenity}
                  className={`px-3 py-2 rounded-full ${
                    selectedAmenities.includes(amenity)
                      ? "bg-white text-white"
                      : "bg-blue-800 text-white"
                  } text-[14px]`}
                  onPress={() => toggleAmenity(amenity)}
                >
                  <Text>{amenity}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* APPLY BUTTON */}
          <TouchableOpacity
            onPress={handleSetFindPlaceFilter}
            className="bg-yellow-500  w-full py-3 rounded-lg font-bold mb-12"
          >
            <Text className="text-center text-blue-900 font-JakartaExtraBold ">
              Áp dụng
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default ParkFilter;
