import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMapMarkerAlt,
  faStar,
  faEllipsisH,
  faExclamationCircle,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "expo-router";
import { icons, carAndImages, images } from "@/constants";
import ControlTimeInAndOut from "@/components/ControlTimeInAndOut";
import { useParkingStore, useFindPlaceFilter } from "@/store";
import { useRouter } from "expo-router";
import { useUser } from "@clerk/clerk-expo";

const ParkReserve = () => {
  const { user } = useUser();
  const { times, cars, setCars, totalHour, totalPrice } = useFindPlaceFilter();
  const router = useRouter();
  const { selectedParking } = useParkingStore();
  const navigation = useNavigation();

  const handleCreateInvoice = () => {
    const createInvoice = async () => {
      const body={
        userId: user?.id,
        placeId: selectedParking?.id,
        totalHour,
        totalPrice,
        startHour: times.startTime.toISOString(),
        endHour: times.endTime.toISOString(),
        createdAt: new Date().toISOString(),
        paymentMethod: "Momo",
        paymentStatus: "Pending",
        carType: cars,
      } 
      const response = await fetch(
        "http://192.168.42.1:3000/invoice/create_invoice",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body)
        }
      );

      const data = await response.json();
      if (response.status === 200) {
        Alert.alert("Thông báo", "Tạo hóa đơn thành công");
        await router.push("/(root)/park-success");
      } else {
        Alert.alert("Thông báo", "Tạo hóa đơn thất bại");
      }
    };
    createInvoice();
  };
  return (
    <SafeAreaView>
      <GestureHandlerRootView className=" w-full h-full relative">
        <ScrollView>
          {/* HEADER */}
          <View className="bg-[#ccd8d5]  flex-col items-start justify-start p-4  pb-16 ">
            <View className="flex-row gap-x-3">
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Image className="w-6 h-6" source={icons.backArrow} />
              </TouchableOpacity>
              <Text style={styles.mainText}>Đặt chỗ</Text>
            </View>

            <View className="mt-4">
              <Text className="text-lg font-semibold" style={styles.mainText}>
                Vincom Center Đồng Khởi
              </Text>
              <View className="flex-row items-center text-gray-500 text-sm mt-1">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  size={16}
                  color="#151551"
                />
                <Text className="ml-1 mr-2" style={styles.subText}>
                  {selectedParking?.distance}
                </Text>

                <FontAwesomeIcon icon={faStar} size={16} color="yellow" />
                <Text className="ml-1" style={styles.subText}>
                  {selectedParking?.rating} (100)
                </Text>
              </View>
            </View>
          </View>
          {/* HEADER */}

          {/* SUBHEADER */}
          <View
            className="absolute top-36 left-5 w-[93%]  bg-green-100 
         border-l-[2px] border-green-500  p-4 px-3   z-50 flex-row gap-x-1 items-center"
          >
            <View className=" mr-1">
              <FontAwesomeIcon icon={faExclamationCircle} color="green" />
            </View>

            <Text className="text-green-600 text-[16px]">
              Bãi xe không nhận giữ xe qua đêm
            </Text>
          </View>
          {/* SUBHEADER */}

          <View className=" px-4 w-full pt-6 ">
            <View className="bg-white border-[1px] border-general-200 p-4 mt-4  ">
              <ControlTimeInAndOut showDetail={true} />
            </View>

            <View className="flex-row gap-x-1 items-center py-4 mb-2">
              <Text className="text-[#151551] text-sm font-semibold ">
                Chính sách hủy đặt chỗ
              </Text>
              <View>
                <FontAwesomeIcon
                  color="#151551"
                  size={12}
                  icon={faExclamationCircle}
                />
              </View>
            </View>
          </View>

          <View className="bg-white  p-4 w-full  flex-col gap-y-4">
            <View className="flex-row justify-between items-center mt-4">
              {carAndImages.map((car) => (
                <Pressable
                  key={car.type}
                  onPress={() => {
                    setCars(
                      car.type as
                        | "Xe 4 chỗ"
                        | "Xe 7 chỗ"
                        | "Xe tải nhỏ"
                        | "Xe tải lớn"
                    );
                  }}
                  className="flex-col items-center justify-center"
                >
                  <Image
                    source={{
                      uri: car.image,
                    }}
                    className="w-24 h-24"
                    resizeMode="center"
                  />
                  <Text
                    className={`${cars !== car.type ? "text-general-200" : "text-black"} font-semibold`}
                  >
                    {car.type}
                  </Text>
                </Pressable>
              ))}
            </View>

            <View className="mt-4 border-y-[1px] py-2 border-general-200 flex-row justify-between items-center">
              <Text className="text-gray-500 font-JakartaMedium">
                Biển số xe
              </Text>
              <Text className="font-semibold text-[#151551] font-JakartaExtraBold">
                75A - 145.19
              </Text>
            </View>
            <View className="flex-row justify-between items-center mt-4 px-2">
              <Image source={images.momo} className="w-12 h-12" />

              <Pressable
                onPress={() => {
                  router.push("/(root)/discount");
                }}
              >
                <Text className="font-semibold text-[#151551] font-JakartaExtraBold">
                  MÃ ƯU ĐÃI
                </Text>
              </Pressable>
              <FontAwesomeIcon icon={faEllipsisH} size={24} />
            </View>
            <View className="  bg-green-100 w-full p-4 px-3  flex-row gap-x-2 items-center ">
              <View className="p-1 bg-[#1d4ed8] rounded-sm">
                <FontAwesomeIcon icon={faCheck} size={16} color="white" />
              </View>

              <Text className="text-blue-700 font-JakartaMedium text-[16px]">
                Tôi đã đọc và đồng ý với quy định chung
              </Text>
            </View>

            <TouchableOpacity className="w-full bg-yellow-300 py-3 rounded-2xl mt-3">
              <Text
                onPress={handleCreateInvoice}
                className="text-center text-[#151551] font-JakartaBold"
              >
                Tiếp theo
              </Text> 
            </TouchableOpacity>
          </View> 
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default ParkReserve;
const styles = StyleSheet.create({
  mainText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#151551",
  },
  subText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#818382",
  },
});
