import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  TouchableOpacity,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { faClose, faHouse, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Slider } from "react-native-awesome-slider";
import { useSharedValue } from "react-native-reanimated";
import Map from "@/components/Map";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient

const aboutPage = () => {
  const router = useRouter();
  const maxDay = useSharedValue(30);
  const minDay = useSharedValue(1);
  const [isSliding, setIsSliding] = React.useState(false);
  const [day, setDay] = React.useState(1);
  const [income, setIncome] = React.useState(day * 199);
  const currentDay = useSharedValue(1);

  return (

      <View className="w-full h-full relative bg-white">
        <TouchableOpacity
          className="absolute w-[30px] h-[30px] z-50 ml-6 mt-6 items-center justify-center
           bg-gray-400 rounded-full"
        >
          <FontAwesomeIcon icon={faClose} color="#fff" size={16} />
        </TouchableOpacity>
        <ScrollView className="flex-col p-6  relative ">
          <View className=" flex-col items-center w-full gap-y-6">
            <View className="flex-col items-center gap-y-6 w-full">
              <Text
                className="text-[#151551] text-[36px] flex-col text-center 
              font-JakartaBold"
              >
                Cho thuê bãi đỗ xe trên Pade {"\n"}
                <Text className="mt-2 text-black">Bạn có thể kiếm được</Text>
              </Text>
              <Text
                className={`${isSliding && "mb-[46px]"} text-[60px] font-JakartaMedium `}
              >
                <Text className="underline">đ</Text> {income}.000
              </Text>
              {!isSliding && (
                <Text className="text-black text-[16px]">
                  <Text className="underline font-bold">{day} đêm</Text> với ước
                  tính đ{income}.000 mỗi đêm
                </Text>
              )}

              <Slider
                style={{ width: "90%", height: 40 }}
                minimumValue={minDay}
                maximumValue={maxDay}
                progress={currentDay}
                onValueChange={(value) => {
                  setIsSliding(true);
                  setDay(Math.floor(value));
                  setIncome(Math.floor(value) * 199);
                }}
                onSlidingComplete={(value) => {
                  currentDay.value = Math.floor(value);
                  setIsSliding(false);
                }}
                theme={{
                  disableMinTrackTintColor: "#000",
                  maximumTrackTintColor: "#9f9999",
                  minimumTrackTintColor: "#000",
                  cacheTrackTintColor: "#333",
                  bubbleBackgroundColor: "#666",
                  heartbeatColor: "#999",
                }}
                thumbWidth={20}
                renderBubble={() => (
                  <View className="ml-4 mb-4 relative bg-black p-2 rounded-2xl">
                    <Text className="text-[16px] text-center font-JakartaMedium text-white">
                      {Math.floor(day)} đêm{" "}
                    </Text>
                  </View>
                )}
              />

              <Text className="text-gray-400 text-[16px] underline">
                Tìm hiểu cách chúng tôi ước tính thu nhập của bạn
              </Text>

              <View
                className="w-full rounded-3xl 
              border-[1px] border-general-200 p-4 px-6 flex-row items-center "
              >
                <FontAwesomeIcon icon={faSearch} color="#151551" size={20} />
                <Text className="ml-4 text-[20px] font-bold">
                  Thành phố Hồ Chí Minh{" "}
                </Text>
              </View>
            </View>
            <View className="rounded-[30px] overflow-hidden w-full h-[500px]">
              <Map />
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity
          onPress={() => {
            router.push("/(owner)/(input)/onboarding");
          }}
          className="absolute p-8 py-4 bottom-0 left-0 w-full"
        >
          <LinearGradient
            colors={["#00bcd4", "#2196f3"]} 
            start={{ x: 0, y: 0 }} 
            end={{ x: 1, y: 0 }} 
            className="rounded-xl py-4 flex-row gap-x-4 justify-center items-center"
          >
            <FontAwesomeIcon icon={faHouse} color="white" size={20} />
            <Text className="text-[20px] font-JakartaMedium text-white">
              Pade Setup
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

  );
};

export default aboutPage;
