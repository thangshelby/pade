import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSetUpParkingStore } from "@/store";
import { amenities, specialLocationNearby } from "@/constants";

const Amenities = () => {
  const { setAmenities, setLocationNearBy } = useSetUpParkingStore();
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedSpecialLocationNearby, setSelectedSpecialLocationNearby] =
    useState<string[]>([]);

  useEffect(() => {
    setAmenities(selectedAmenities);
    setLocationNearBy(selectedSpecialLocationNearby);
    return () => {
      console.log("leave");
    };
  }, [selectedAmenities, selectedSpecialLocationNearby]);
  return (
    <ScrollView className="flex-col px-6 py-2 gap-y-4 pb-60 border-t-[1px] mt-1 border-gray-300">
      <View className="flex-col   mt-20">
        <Text className="text-[24px] font-JakartaBold">
          Cho khách hàng biết thêm về tiện ích của bạn
        </Text>

        <Text className="text-[20px] font-JakartaLight text-general-200">
          Bạn có thể thêm
        </Text>
      </View>

      <View className="flex-col gap-y-2">
        <Text className="text-[20px] font-medium">
          Bạn có những tiện nghi này không ?
        </Text>

        <View className="flex-row flex-wrap items-center justify-evenly gap-y-8">
          {amenities.map((item) => {
            return (
              <TouchableOpacity
                key={item.title}
                onPress={() => {
                  if (selectedAmenities.includes(item.title)) {
                    setSelectedAmenities(
                      selectedAmenities.filter(
                        (amenity) => amenity !== item.title
                      )
                    );
                  } else {
                    setSelectedAmenities([...selectedAmenities, item.title]);
                  }
                }}
                className={` flex-col  justify-evenly items-start p-4 
        border-[1px] border-gray-400  rounded-2xl w-[220px] gap-y-1
        ${selectedAmenities.includes(item.title) && "bg-gray-400 border-black"}`}
              >
                <View className="w-8 h-8">
                  <Image source={item.icon} className="w-full h-full" />
                </View>
                <Text className="text-[16px] font-JakartaSemiBold ">
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View className="flex-col gap-y-2">
        <Text className="text-[20px] font-medium">
          Gần đó có những địa điểm thú vị nào ?
        </Text>
        <View className="flex-row flex-wrap items-center justify-evenly gap-y-8 pb-72">
          {specialLocationNearby.map((item) => {
            return (
              <TouchableOpacity
                key={item.title}
                onPress={() => {
                  if (selectedAmenities.includes(item.title)) {
                    setSelectedAmenities(
                      selectedAmenities.filter(
                        (amenity) => amenity !== item.title
                      )
                    );
                  } else {
                    setSelectedAmenities([...selectedAmenities, item.title]);
                  }
                }}
                className={` flex-col  justify-evenly items-start p-4 
          border-[1px] border-gray-400  rounded-2xl w-[220px] gap-y-1
          ${selectedAmenities.includes(item.title) && "bg-gray-400 border-black"}`}
              >
                <View className="w-8 h-8">
                  <Image source={item.icon} className="w-full h-full" />
                </View>
                <Text className="text-[16px] font-JakartaSemiBold ">
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default Amenities;
