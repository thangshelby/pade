import { faLocationDot, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { images } from "@/constants";
const RentalPrice = () => {
  const [suggestPrice, setSuggesPrice] = useState(100000);

  return (
    <View className="flex-col  relative w-full h-screen px-6 gap-y-4">
      <View className="flex-col gap-y-2  mt-20">
        <Text className="text-[24px] font-JakartaBold">
          Bây giờ, hãy đặt mức giá mà bạn muốn
        </Text>

        <Text className="text-[16px] font-normal text-general-200">
          Bạn có thể thay đổi giá bất cứ lúc nào.
        </Text>
      </View>
      <View className="flex-col  pt-56 items-center gap-y-6 h-full w-full shadow-2xl">
        <View className="flex-row items-center gap-x-2">
          <TextInput
            onChangeText={(text) => {
              let price = parseInt(text) || 0;

              setSuggesPrice(price);
            }}
            value={suggestPrice.toString()}
            className="font-bold text-[64px]"
          />
          <Text className="font-bold text-[64px]">đ</Text>
          <TouchableOpacity className="p-2 rounded-full border-[1px] border-gray-500 ">
            <FontAwesomeIcon icon={faPen} size={10} />
          </TouchableOpacity>
        </View>

        <View className="rounded-2xl border-[2px] flex flex-col p-6 gap-y-2 w-full">
          <View className="flex flex-row justify-between ">
            <Text className="text-[18px]">Giá cơ sở</Text>
            <Text className="text-[18px]">đ{suggestPrice}</Text>
          </View>
          <View className="flex flex-row justify-between mb-2">
            <Text className="text-[18px] font-normal ">
              Phí dịch vụ dành cho Bên Thứ ba
            </Text>
            <Text className="text-[18px]">
              -đ{Math.floor((suggestPrice * 20) / 100)}
            </Text>
          </View>
          <View className="w-full p-1 border-t-[1px] border-gray-300" />
          <View className="flex flex-row justify-between ">
            <Text className="text-[18px] font-semibold">Bạn kiếm được</Text>
            <Text className="text-[18px] font-bold">
              đ{suggestPrice - Math.floor((suggestPrice * 20) / 100)}
            </Text>
          </View>
        </View>

        <View className="p-4 pt-72 relative">
          <View
            style={styles.box}
            className="bg-white rounded-2xl w-full flex-row gap-x-2 items-center shadow-2xl border-[1px]
       border-gray-300 p-4 mb-2"
          >
            <FontAwesomeIcon icon={faLocationDot} color="blue" />
            <Text className="font-medium text-[16px]">
              Những bãi đỗ xe tương tự: đ{(suggestPrice * 75) / 100} - đ
              {(suggestPrice * 125) / 100}
            </Text>
          </View>

          <TouchableOpacity>
            <Text className="text-center underline text-gray-700 font-medium">
              Tìm hiểu thêm về cách dịnh giá
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RentalPrice;

const styles = StyleSheet.create({
  box: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 0,
    elevation: 5,
    // elevation: 5, // Higher values create deeper shadows
  },
});
