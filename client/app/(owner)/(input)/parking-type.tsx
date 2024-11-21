import React from "react";
import { View, Text, Image } from "react-native";
import { icons } from "@/constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSetUpParkingStore } from "@/store";
const ParkingType = () => {
  const parkingTypes: {
    id: number;
    name:
      | "Trong nhà"
      | "Bãi đỗ xe chung cư"
      | "Bãi đỗ xe chuyên dụng"
      | "Khu đất trống"
      | "Sân vườn";
    icons: any;
  }[] = [
    {
      id: 1,
      name: "Trong nhà",
      icons: icons.house,
    },
    {
      id: 2,
      name: "Bãi đỗ xe chung cư",
      icons: icons.residental,
    },
    {
      id: 3,
      name: "Bãi đỗ xe chuyên dụng",
      icons: icons.spaces,
    },
    {
      id: 4,
      name: "Khu đất trống",
      icons: icons.land,
    },
    {
      id: 5,
      name: "Sân vườn",
      icons: icons.mansion,
    },
  ];

  const { parkingType,setParkingType } = useSetUpParkingStore();
  return (
    <View className="flex-col px-6 py-2 gap-y-6 ">
      <Text className="text-[24px] font-JakartaBold">
        Điều nào sau đây mô tả đúng nhất về bãi đỗ của bạn
      </Text>
      <View className="flex-row flex-wrap items-center justify-evenly gap-y-8">
        {parkingTypes.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => setParkingType(item.name)}
              key={item.id}
              className={`flex-col  justify-evenly items-center 
            border-[1px] border-gray-400  rounded-3xl w-[220px] h-[220px] ${parkingType === item.name && "bg-gray-100 border-black" }`}
            >
              <View className="w-20 h-20">
                <Image source={item.icons} className="w-full h-full" />
              </View>
              <Text className="text-[20px] font-JakartaSemiBold px-4 text-center">
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default ParkingType;
