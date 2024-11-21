import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";

const Home = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex-col h-full  items-center pb-16 justify-between bg-[#181858]">
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="p-1 mx-1 bg-[#E2E8F0] rounded-full" />}
        activeDot={<View className="p-1 mx-1 bg-yellow-400 rounded-full" />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        <View className="flex-col justify-center items-center">
          <Image
            className="w-full mt-16"
            resizeMode="stretch"
            source={require("@/assets/images/onboard1.png")}
          />
          <View className="mt-10"> 
            <Text className="text-[30px] text-white font-JakartaSemiBold text-center">
              SO SÁNH GIÁ
            </Text>
            <Text className="text-[20px] text-yellow-500 font-JakartaSemiBold text-center">
              Dễ dàng giữa các bãi đỗ
            </Text>
          </View>
        </View>
        <View className="flex-col justify-center items-center">
          <Image
            className="w-full mt-12"
            resizeMode="stretch"
            source={require("@/assets/images/onboard2.png")}
          />
          <View className="mt-10"> 
            <Text className="text-[30px] text-white font-JakartaSemiBold text-center">
              ĐẶT LỊCH
            </Text>
            <Text className="text-[20px] text-yellow-500 font-JakartaSemiBold text-center">
              Nhanh chóng và tiện lợi
            </Text>
          </View>
        </View>
        <View className="flex-col justify-center items-center">
          <Image
            className="w-full mt-16"
            resizeMode="stretch"
            source={require("@/assets/images/onboard3.png")}
          />
          <View className=""> 
            <Text className="text-[30px] text-white font-JakartaSemiBold text-center">
              TÌM KIẾM BÃI ĐỖ
            </Text>
            <Text className="text-[20px] text-yellow-500 font-JakartaSemiBold text-center">
              Ở khắp mọi nơi
            </Text>
          </View>
        </View>
      </Swiper>

      <TouchableOpacity
        onPress={() => {
          isLastSlide
          ? router.replace("/(auth)/sign-up")
          : swiperRef.current?.scrollBy(1)
        }}
        className="w-full p-3 bg-yellow-400 rounded-md"
      >
        <Text className="font-JakartaBold text-[#151551] text-center">
          Tiếp theo
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  view: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    transform: [{ rotate: "25deg" }],
  },
  container: {
    flex: 1,
    backgroundColor: "#002a5c",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 250,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    opacity: 0.9,
  },
  cardText: {
    fontSize: 18,
    color: "#ffcc00",
    fontWeight: "bold",
  },
  cardSubText: {
    fontSize: 14,
    color: "#fff",
    marginTop: 5,
  },
});
