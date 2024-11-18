import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { icons } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import ControlTimeInAndOut from "@/components/ControlTimeInAndOut";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { useNavigation } from "expo-router";
import { useParkingStore ,useFindPlaceFilter} from "@/store";


const ParkSuccess = () => {
  const { selectedParking } = useParkingStore();
  const router = useRouter();
  const navigation = useNavigation();
  const {cars,totalPrice} = useFindPlaceFilter();

  return (
   
      <SafeAreaView>
        <GestureHandlerRootView className="w-full h-full">
          <View className="bg-[#ccd8d5] relative h-full p-5 ">
            <View className="flex-row items-center justify-start gap-5">
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Image className="w-6 h-6" source={icons.backArrow} />
              </TouchableOpacity>
              <Text style={styles.mainText}>Đặt chỗ thành công</Text>
            </View>

            <View
              className="bg-white absolute left-5
      top-20 w-full h-[85%] p-3 rounded-2xl flex-col gap-y-3"
            >
              <View className="flex-row justify-between items-center">
                <Text style={styles.mainText}>{selectedParking?.title}</Text>
                <Text className="text-gray-500">{selectedParking?.distance}km</Text>
              </View>
              <ControlTimeInAndOut />

              <View className="flex-col justify-center items-center ">
                <Text style={styles.mainText}>Phí tạm tính</Text>
                <Text className="font-JakartaExtraBold text-[24px] text-primary-500 ">
                 {totalPrice}.000đ
                </Text>
              </View>

              <View
                className="flex-row justify-between items-center py-4
        border-y-[1px] border-dashed border-general-200 "
              >
                <View className="flex-col gap-1 items-start">
                  <Text style={styles.subText}>Loại xe</Text>
                  <Text style={styles.mainText} className="font-400">
                    {cars}
                  </Text>
                </View>

                <View className="flex-col gap-1 items-start">
                  <Text style={styles.subText}>Biển số</Text>
                  <Text className="font-400" style={styles.mainText}>
                    A-BJ120-KH
                  </Text>
                </View>
              </View>

              <View
                className="w-full flex-col gap-3 items-center justify-center  
        "
              >
                <Text className="text-4 text-">Quét mã QR khi vào bãi đỗ</Text>
                <View className="border-[1px] border-general-200 bg-white p-8 shadow-2xl  ">
                  <QRCode
                    value="Just some string value"
                    size={200}
                    logoBackgroundColor="transparent"
                  />
                </View>
              </View>
            </View>
            <View className="absolute bottom-6 left-5 w-full">
              <View className="flex flex-row w-full justify-between items-center ">
                <TouchableOpacity
                  onPress={() => {
                    router.push('/(user)/(tabs)/home')
                  }}
                  className="bg-yellow-500 w-full  text-white px-24 py-2 rounded-lg"
                >
                  <Text className="text-white text-center font-JakartaBold">
                    Chỉ đường đến bãi đỗ
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-yellow-100  text-yellow-500 px-4 py-3 rounded-lg">
                  <FontAwesomeIcon icon={faPhone} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </GestureHandlerRootView>
      </SafeAreaView>
  );
};

export default ParkSuccess;

const styles = StyleSheet.create({
  mainText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#151551",
  },
  subText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#818382",
  },
});
