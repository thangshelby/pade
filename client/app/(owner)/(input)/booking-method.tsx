import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { icons } from "@/constants";
import { useSetUpParkingStore } from "@/store";

const BokingMethod = () => {
  const { bookingMethod,setBookingMethod } = useSetUpParkingStore();  
  return (
    <View className="flex-col  relative w-full h-screen px-6 gap-y-4">
      <View className="flex-col gap-y-2  mt-20">
        <Text className="text-[24px] font-JakartaBold">Chọn cài đặt phòng</Text>

        <Text className="text-[16px] font-normal text-general-200">
          Bạn có thể thay đổi cài đặt này bất cứ lúc nào.
          <Text className="underline text-gray-700">Tìm hiểu thêm</Text>
        </Text>
      </View>
      <View className="flex-col gap-y-8">
        <TouchableOpacity
        onPress={()=>{setBookingMethod(0)}}
          className={` flex-row  p-4 justify-between
          border-[1px] border-gray-400  rounded-2xl w-full  ${bookingMethod==0&&'bg-gray-100 border-black'}
        `}
        >
          <View className="flex-col gap-y-1 w-[85%]">
            <Text className="text-[16px] font-bold ">
              Chấp thuận 5 lượt đặt chỗ đầu tiên
            </Text>
            <Text className="text-green-600 font-medium">Được đề xuất</Text>
            <Text className="text-general-200 ">
              Ban đầu, hãy xem xét các yêu cầu đặt bãi đỗ của khách hàng, sau đó
              chuyển sang chế độ Đặt ngay để khách có thể đặt bãi đỗ tự động.
            </Text>
          </View>

          <View className="w-12 h-12">
            <Image source={icons.calendar} className="w-full h-full" />
          </View>

        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{setBookingMethod(1)}}
          className={` flex-row  p-4 justify-between 
          border-[1px] border-gray-400  rounded-2xl w-full ${bookingMethod==1&&'bg-gray-100 border-black'}
        `}
        >
          <View className="flex-col gap-y-1 w-[85%]">
            <Text className="text-[16px] font-bold ">
              Sử dụng tính năng đặt ngay
            </Text>
            <Text className="text-general-200 ">
            Cho phép khách đặt phòng tự động
            </Text>
          </View>

          <View className="w-10 h-10">
            <Image source={icons.flash} className="w-full h-full" />
          </View>

        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BokingMethod;
