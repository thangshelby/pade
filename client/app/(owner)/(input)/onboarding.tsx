import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { useUser } from "@clerk/clerk-expo";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { faFaceAngry } from "@fortawesome/free-regular-svg-icons";

const App = () => {
  const router = useRouter();
  const { user } = useUser();
  return (
    <View className="p-6 relative ">
      <View className="absolute top-2 left-6 flex-row justify-between items-center w-full  ">
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          className="p-2 px-6 rounded-3xl border-[1px] border-gray-300"
        >
          <Text className="font-JakartaMedium text-center">Thoát</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-2 px-8 rounded-3xl border-[1px] border-gray-300">
          <Text className="font-JakartaMedium text-center">
            Bạn có thắc mắc
          </Text>
        </TouchableOpacity>
      </View>

      <View className="flex-col gap-y-6 justify-start  mt-8">
        <Text className="text-[28px] font-JakartaBold  mt-8">
          Chào mừng {user!.fullName} quay trở lại
        </Text>
      
        <View className="flex-col gap-y-6 ">
        <Text className="text-[24px]  font-JakartaMedium">
          Hoàn thiện mục thuê nhà của bạn
        </Text>

          <TouchableOpacity className="w-full border-[1px] border-gray-300 rounded-2xl overflow-hidden px-2 py-3 flex-row items-center gap-x-2">
            <View className="p-[16px] bg-gray-300 rounded-sm">
              <FontAwesomeIcon icon={faHouse} size={20} />
            </View>
            <Text className="text-[20px] font-JakartaSemiBold">
              Bai do xe dac biet tao vao ngay 12/20
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-full border-[1px] border-gray-300 rounded-2xl overflow-hidden px-2 py-3 flex-row items-center gap-x-2">
            <View className="p-[16px] bg-gray-300 rounded-sm">
              <FontAwesomeIcon icon={faHouse} size={20} />
            </View>
            <Text className="text-[20px] font-JakartaSemiBold">
              Bai do xe dac biet tao vao ngay 12/20
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-full border-[1px] border-gray-300 rounded-2xl overflow-hidden px-2 py-3 flex-row items-center gap-x-2">
            <View className="p-[16px] bg-gray-300 rounded-sm">
              <FontAwesomeIcon icon={faHouse} size={20} />
            </View>
            <Text className="text-[20px] font-JakartaSemiBold">
              Bai do xe dac biet tao vao ngay 12/20
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-col gap-y-6 ">
          <Text className="text-[24px] font-JakartaMedium">
            Bắt đầu tạo mục cho thuê mới
          </Text>

          <TouchableOpacity
          onPress={() => {
            router.push("/(owner)/(input)/input-layout")
          }}
          className="flex-row items-center justify-between">
            <View className="flex-row gap-x-2 items-center">
              <FontAwesomeIcon icon={faHouse} size={20} />
              <Text className="text-black font-[400] text-xl">
                Tạo mục cho thuê mới
              </Text>
            </View>

            <FontAwesomeIcon icon={faChevronRight} size={20} />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between">
            <View className="flex-row gap-x-2 items-center">
              <FontAwesomeIcon icon={faHouse} size={20} />
              <Text className="text-black font-[400] text-xl">
                Tạo từ một mục cho thuê hiện có
              </Text>
            </View>

            <FontAwesomeIcon icon={faChevronRight} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default App;
