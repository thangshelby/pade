import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCar, faCheck, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Slider } from "react-native-awesome-slider";
import { useSharedValue } from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { times, cars, amenities } from "@/constants";
import { useNavigation } from "expo-router";
import { useFindPlaceFilter } from "@/store";

const ParkFilter = () => {
  const navigation = useNavigation();
  const {setTimes,setCars,setAmenities,setPrice,setDistance}=useFindPlaceFilter()

  const [currentPrice, setCurrentPrice] = useState(25);
  const [selectedTime, setSelectedTime] = useState<"Theo ngày"| "Theo tuần">("Theo ngày");
  const [selectedCar, setSelectedCar] = useState<"Xe 4 chỗ"| "Xe 7 chỗ"| "Xe tải nhỏ"| "Xe tải lớn">("Xe 4 chỗ");
  const [selectedAmenities, setSelectedAmenities] = useState([
    "Có mái che",
    "Camera an ninh",
  ]);

  const price = useSharedValue(25);
  const minPrice = useSharedValue(0);
  const maxPrice = useSharedValue(100);

  const [currentDistance, setCurrentDistance] = useState(500);
  const minDistance = useSharedValue(0);
  const maxDistance = useSharedValue(1000);
  const distance = useSharedValue(500);

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((item) => item !== amenity)
        : [...prev, amenity]
    );
  };

  const handleSetFindPlaceFilter=()=>{
    setTimes(selectedTime)
    setCars(selectedCar)
    setAmenities(selectedAmenities)
    setPrice(price.value)
    setDistance(distance.value)
  }
  return (
    <SafeAreaView className="w-full h-full">
      <GestureHandlerRootView>
        <ScrollView className="bg-blue-950 text-white h-full p-4">
          <View className="flex-row justify-between items-center mb-4">
            <View className="flex-row items-center gap-x-4">
              <TouchableOpacity onPress={()=>{
                navigation.goBack()
              }}>
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="white" />
              </TouchableOpacity>
              <Text className="text-xl font-JakartaExtraBold text-white">
                Bộ lọc
              </Text>
            </View>

            <TouchableOpacity>
              <Text className="text-yellow-400 font-bold">Đặt lại</Text>
            </TouchableOpacity>
          </View>

          <View className="mb-4">
            <Text className="mb-2 text-white font-JakartaBold">
              Phí trông/ giữ xe (theo giờ)
            </Text>
            <Slider
              style={{ width: "100%", height: 40, marginTop: 30 }}
              minimumValue={minPrice}
              maximumValue={maxPrice}
              progress={price}
              onSlidingComplete={(value) => {
                setCurrentPrice(value);
                price.value = value;
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
                    <Text>{Math.floor(price.value)}.000đ/giờ</Text>
                  </View>
                </View>
              )}
            />
          </View>

          <View className="mb-4">
            <Text className="mb-2 text-white font-JakartaBold">
              Khoảng cách
            </Text>
            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={minDistance}
              maximumValue={maxDistance}
              progress={distance}
              onSlidingComplete={(value) => {
                setCurrentDistance(value);
                distance.value = value;
              }}
              renderBubble={() => null}
              renderThumb={() => (
                <View className="bg-yellow-400 rounded-full p-2 relative">
                  <View className="mb-3 p-2 rounded-2xl bg-white absolute top-[-40px] left-[-20px]">
                    <Text>{Math.floor(distance.value)} m </Text>
                  </View>
                </View>
              )}
            />
          </View>

          <View className="mb-4">
            <Text className="mb-2 text-white font-JakartaBold">
              Thời gian gửi xe
            </Text>
            <View className="flex-row space-x-2">
              {times.map((time) => (
                <TouchableOpacity
                  key={time}
                  className={`px-3 py-2 rounded-full flex-row items-center ${
                    selectedTime === time
                      ? "text-white bg-white"
                      : "bg-blue-800 text-white"
                  }`}
                  onPress={() => setSelectedTime(time)}
                >
                  {selectedTime === time && (
                    <Text className="mr-1">
                      <FontAwesomeIcon icon={faCheck} />
                    </Text>
                  )}
                  <Text className="font-JakartaMedium">{time}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View className="mb-4">
            <Text className="mb-2 text-white font-JakartaBold">
              Loại xe gửi
            </Text>
            <View className="space-y-2">
              {cars.map((car) => (
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

          <View className="mb-4">
            <Text className="mb-2 text-white font-JakartaBold">Tiện ích</Text>
            <View className="flex-row flex-wrap gap-2">
              {amenities.map((amenity) => (
                <TouchableOpacity
                  key={amenity}
                  className={`px-4 py-2 rounded-full ${
                    selectedAmenities.includes(amenity)
                      ? "bg-white text-white"
                      : "bg-blue-800 text-white"
                  }`}
                  onPress={() => toggleAmenity(amenity)}
                >
                  <Text>{amenity}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <TouchableOpacity onPress={handleSetFindPlaceFilter} className="bg-yellow-500  w-full py-3 rounded-lg font-bold">
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
