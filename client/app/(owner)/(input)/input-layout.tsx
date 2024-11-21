import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import {
  ParkingType,
  Location,
  Description,
  Amenities,
  Pictures,
  BookingMethod,
  RentalPrice,
  Preview,
} from "./index";
import { BlurView } from "expo-blur";

const inputLayout = () => {
  const [isBlur, setIsBlur] = useState(false);
  const router = useRouter();

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = React.useRef<Swiper | null>(null);
  const [width, setWidth] = useState(Math.floor(((activeIndex + 1) * 515) / 7));

  return (
    <BlurView
      intensity={100}
      className={`  relative  ${isBlur ? "bg-black" : "bg-white"}`}
    >
      {/* NAV BUTTON  */}

      <View
        className="absolute top-6 left-0 flex-row justify-between items-center w-full px-6
      pb-4"
      >
        <TouchableOpacity
          onPress={() => {
            router.push("/(owner)/(tabs)/home");
          }}
          className={`${isBlur ? "border-black" : "border-gray-300"} p-2 px-6 rounded-3xl border-[1px] `}
        >
          <Text className="font-JakartaMedium text-center">Lưu và Thoát</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={` ${isBlur ? "border-black" : "border-gray-300"} p-2 px-6 rounded-3xl border-[1px]`}
        >
          <Text className="font-JakartaMedium text-center">
            Bạn có thắc mắc ?
          </Text>
        </TouchableOpacity>
      </View>
      {/* NAV BUTTON  */}
      <View className="w-full h-full mt-12">
        <Swiper
          className="pt-6"
          ref={swiperRef}
          loop={false}
          showsButtons={false}
          onIndexChanged={(index) => {
            setWidth(Math.floor(((index + 1) * 515) /7));
            setActiveIndex(index);
          }}
        >
          <ParkingType />
          <Location isBlur={isBlur} setIsBlur={setIsBlur} />
          <Description />
          <Amenities />
          <Pictures isBlur={isBlur} setIsBlur={setIsBlur} />
          <BookingMethod />
          <RentalPrice />
          <Preview/>
        </Swiper>
      </View>

      {!isBlur && (
        <View className="absolute top-[86%] left-0 flex-col py-8 justify-between items-center w-[585px]      ">
          <View className="w-full py-1 bg-gray-500 relative">
            <View
              style={{ width: width }}
              className="absolute top-0 left-0 bg-black py-1 "
            ></View>
          </View>
          <View className="flex-row px-6 justify-between items-center py-4 w-full bg-white z-10">
            {activeIndex !== 0 ? (
              <TouchableOpacity
                onPress={() => {
                  swiperRef!.current!.scrollBy(-1);

                  setActiveIndex(activeIndex - 1);
                  setWidth(Math.floor(((activeIndex - 1) * 515) / 7));
                }}
                className="p-2 px-6 "
              >
                <Text className="font-JakartaMedium text-center underline decoration-black   text-[16px]">
                  Quay lại
                </Text>
              </TouchableOpacity>
            ) : (
              <View className="" />
            )}

            <TouchableOpacity
              onPress={() => {
                if (activeIndex === 7) {
                  router.push("/(owner)/setup-parking-success");
                } else {
                  swiperRef!.current!.scrollBy(1);
                  setActiveIndex(activeIndex + 1);
                  setWidth(Math.floor(((activeIndex + 1) * 515) / 6));
                }
              }}
              className="p-4 px-8  bg-gray-900 rounded-lg"
            >
              <Text className="font-JakartaMedium text-center text-white text-[16px]">
                Tiếp theo
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </BlurView>
  );
};

export default inputLayout;
