import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowLeft,
  faShareAlt,
  faMapMarkerAlt,
  faExclamationCircle,
  faStar,
  faUser,
  faFileAlt,
  faPhone,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import ControlTimeInAndOut from "@/components/ControlTimeInAndOut";
import { useParkingStore } from "@/store";
import { markersData } from "@/constants";
import { useNavigation } from "expo-router";

const ParkDetail = () => {
  const navigation = useNavigation();
  const { selectedParking } = useParkingStore();
  const markerDetail = selectedParking || markersData[0];

  const router = useRouter();
  return (
    <SafeAreaView className="w-full">
      <ScrollView className="w-full relative">
        <Image
          source={{
            uri: "https://storage.googleapis.com/a1aa/image/T0Kjvkf6BfreaJbd4UV0FkZajfbpjWtzy6QP66yeCkCRLGddC.jpg",
          }}
          className="w-full h-72 object-cover"
        />
        <View className="absolute top-5 left-0 flex-row justify-between px-8 py-2 w-full items-center ">
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="bg-white p-2 rounded-full shadow-md"
          >
            <FontAwesomeIcon icon={faArrowLeft} color="gray" />
          </TouchableOpacity>

          <TouchableOpacity className="bg-white p-2 rounded-full shadow-md">
            <FontAwesomeIcon icon={faShareAlt} color="gray" />
          </TouchableOpacity>
        </View>

        <View className="p-4 bg-white">
          <Text className="text-xl font-bold text-[#151551]">
            {markerDetail.title}
          </Text>
          <View className="flex-row items-center text-sm mt-1">
            <View className="mr-1">
              <FontAwesomeIcon icon={faMapMarkerAlt} color="gray" />
            </View>
            <Text className="text-gray-500">7.5km</Text>
            <View className="ml-4 mr-1">
              <FontAwesomeIcon icon={faStar} color="yellow" />
            </View>
            <Text className="text-gray-500">4.5 (100)</Text>
          </View>
          <View className="text-sm mt-2 flex-row gap-x-1 items-center">
            <Text className="text-green-600 font-JakartaMedium">Mở cửa</Text>
            <Text className="text-[#151551] font-JakartaMedium">
              {" : "}
              {markerDetail.workingHours}
            </Text>
          </View>
          <View className="bg-green-100  text-sm p-2 rounded mt-2 flex-row gap-x-1 items-center">
            <View className=" mr-1">
              <FontAwesomeIcon icon={faExclamationCircle} color="green" />
            </View>

            <Text className="text-green-600">
              Bãi xe không nhận giữ xe qua đêm
            </Text>
          </View>

          <View className="bg-white border-[1px] border-general-200 p-4 mt-4  ">
            <ControlTimeInAndOut showDetail={true} />
          </View>
        </View>

        <View className=" bg-white p-4 rounded-lg shadow-md">
          <Text className="text-xl font-bold mb-4 text-[#151551]">
            Mô tả bãi xe
          </Text>
          <View className="border border-general-200 p-4 rounded-lg mb-4 shadow-2xl">
            <View className="flex flex-row justify-between mb-2">
              <View className="text-center">
                <Text className="text-gray-500">2 giờ đầu</Text>
                <Text className="text-xl font-bold text-[#151551]">
                  25.000đ
                </Text>
              </View>
              <View className="text-center">
                <Text className="text-gray-500">Mỗi giờ sau</Text>
                <Text className="text-xl font-bold text-[#151551]">
                  + 20.000đ
                </Text>
              </View>
              <View className="text-center">
                <Text className="text-gray-500">Theo ngày</Text>
                <Text className="text-xl font-bold text-[#151551]">
                  200.000đ
                </Text>
              </View>
            </View>
            <Text className="text-gray-700 mb-4">
              Bãi xe nằm trong khu trung tâm thương mại Vincom Center Đồng Khởi,
              tầng B1-B2, an ninh cao, bãi có hệ thống camera quan sát.
            </Text>
            <View className="flex flex-row justify-start space-x-2 mb-4 flex-wrap gap-y-2">
              {markerDetail.amenities.map((amenity) => (
                <TouchableOpacity
                  key={amenity}
                  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full"
                >
                  <Text className="text-blue-600 text-[16px]">{amenity}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity>
              <Text className="text-blue-600 font-JakartaMedium">
                Quy định chung
              </Text>
            </TouchableOpacity>
          </View>
          <Text className="text-xl font-bold mb-4 text-[#151551]">
            Đánh giá
          </Text>
          <View className="space-y-2">
            <View className=" border border-general-200 p-4 rounded-lg mb-4 shadow-2xl">
              <View className="flex flex-row items-center mb-2">
                <Image
                  source={require("../../assets/images/ronaldo.jpg")}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <View>
                  <Text className="font-bold text-[#151551]">Lê Anh Nghĩa</Text>
                  <View className="flex flex-row items-center text-gray-500 text-sm">
                    <View className="mr-1">
                      <FontAwesomeIcon icon={faUser} color="gray" />
                    </View>
                    <Text className="text-gray-700">Tài xế</Text>
                    <View className="ml-3 mr-1">
                      <FontAwesomeIcon icon={faFileAlt} color="gray" />
                    </View>
                    <Text className="text-gray-700">17 bài đánh giá</Text>
                  </View>
                </View>
              </View>
              <View className="flex flex-row items-center mb-2">
                <View className="flex flex-row ">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </View>
                <Text className="text-gray-500 text-sm ml-2">5 ngày trước</Text>
              </View>
              <Text className="text-[#151551]">
                Bãi giữ xe rất an ninh, sạch sẽ. Nhân viên rất nhiệt tình và chu
                đáo. Lần sau sẽ ghé lại.
              </Text>
            </View>
            <View className=" border border-general-200 p-4 rounded-lg mb-1 shadow-2xl">
              <View className="flex flex-row items-center mb-2">
                <Image
                  source={require("../../assets/images/ronaldo.jpg")}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <View>
                  <Text className="font-bold text-[#151551]">
                    Trần Anh Minh
                  </Text>
                  <View className="flex flex-row items-center text-gray-500 text-sm">
                    <View className="mr-1">
                      <FontAwesomeIcon icon={faUser} color="gray" />
                    </View>
                    <Text className="text-gray-700">Tài xế</Text>
                    <View className="ml-3 mr-1">
                      <FontAwesomeIcon icon={faFileAlt} color="gray" />
                    </View>
                    <Text className="text-gray-700">6 bài đánh giá</Text>
                  </View>
                </View>
              </View>
              <View className="flex flex-row items-center mb-2">
                <View className="flex flex-row ">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </View>
                <Text className="text-gray-500 text-sm ml-2">1 tuần trước</Text>
              </View>
              <Text className="text-[#151551]">
                Bãi giữ xe có camera an ninh, mình cũng thấy yên tâm hơn.
              </Text>
            </View>
          </View>
          <TouchableOpacity className="flex-row items-center gap-x-1">
            <Text className="text-blue-600 font-JakartaBold mb-1 ">
              Xem thêm đánh giá khác
            </Text>
            <FontAwesomeIcon icon={faArrowRight} color="#2563e7" />
          </TouchableOpacity>
          <View className="flex flex-row justify-between items-center mt-4  ">
            <TouchableOpacity
              onPress={() => {
                router.push("/(user)/park-reserve");
              }}
              className="bg-yellow-500 w-[80%]  text-white px-6 py-2 rounded-lg"
            >
              <Text className="text-white text-center font-JakartaBold">
                Đặt chỗ
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-yellow-100  text-yellow-500 px-4 py-2 rounded-lg">
              <FontAwesomeIcon icon={faPhone} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ParkDetail;
