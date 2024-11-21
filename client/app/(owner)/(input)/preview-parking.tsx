import React from "react";
import { View, Text, StyleSheet, Image, Platform, Modal } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useSetUpParkingStore, carType } from "@/store";
import { TouchableOpacity } from "react-native-gesture-handler";
import { images } from "@/constants";
const Preview = () => {
  const { pictures, descriptions, price } = useSetUpParkingStore();

  return (
    <View className="flex-col  relative w-full h-screen px-6 gap-y-8 pt-10">
      <View className="flex-col   mt-20">
        <Text className="text-[24px] font-JakartaBold">
          Xem lại bãi đỗ xe của bạn
        </Text>

        <Text className="text-[20px] font-normal text-general-200">
          Dưới đây là những thông tin mà chúng tôi sẽ hiện thị cho khách. Hãy
          đảm bảo mọi thứ đều ổn
        </Text>
      </View>

      <View
        style={styles.container}
        className="bg-white rounded-2xl w-full flex-col shadow-2xl border-[1px]
       border-gray-300 p-4"
      >
        <Image
          source={images.garage}
          className="w-full h-[350px] rounded-2xl mb-4"
        />

        <Text className="line-through text-gray-600 ">đ120.000</Text>
        <Text
          style={{ textDecorationLine: "none" }}
          className=" font-bold text-[18px] text-black "
        >
          đ{price + 100000} ngày
        </Text>
      </View>

      <View className="flex-col gap-y-10">
        <Text className="text-[20px] font-semibold">Tiếp theo là gì </Text>
        <View className="flex-row items-start gap-x-2 ">
          <Image
            className="w-8 h-8"
            source={require("../../../assets/icons/approved.png")}
          />
          <View className="flex-col gap-y-1">
            <Text className="text-black font-medium">
              Xác nhận một vài thông tin rồi đăng cho thuê
            </Text>
            <Text className="text-gray-500 font-normal w-[80%]">
              Chúng tôi sẽ báo cho bạn biết nếu cần xác minh danh tính hoặc đăng
              ký với chính quyền địa phương
            </Text>
          </View>
        </View>
        <View className="flex-row items-start gap-x-2 ">
          <Image
            className="w-8 h-8"
            source={require("../../../assets/icons/calendar.png")}
          />
          <View className="flex-col gap-y-1">
            <Text className="text-black font-medium">Thiết lập lịch</Text>
            <Text className="text-gray-500 font-normal w-[80%]">
              Chọn ngày mục cho thuê có thể đón khách. Mục cho thuê sẽ hiện thị
              sau 24 giờ
            </Text>
          </View>
        </View>
        <View className="flex-row items-start gap-x-2 ">
          <Image
            className="w-8 h-8"
            source={require("../../../assets/icons/pen.png")}
          />
          <View className="flex-col gap-y-1">
            <Text className="text-black font-medium">
              Điều chỉnh cài đặt của bạn
            </Text>
            <Text className="text-gray-500 font-normal w-[80%]">
              Đặt ra nội quy cho bãi đỗ xe, chọn chính sách hủy, chọn cách thức
              đặt bãi đỗ xe của khách,...
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Preview;

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 20,
  },
});
