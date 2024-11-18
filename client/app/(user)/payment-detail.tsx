import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Alert, ScrollView } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { icons, images } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import ControlTimeInAndOut from "@/components/ControlTimeInAndOut";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { useNavigation } from "expo-router";
import { StripeProvider } from "@stripe/stripe-react-native";
import Payment from "@/components/Payment";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { bankIcons } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";

const ParkSuccess = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isOpenBottomSheet, setIsOpenBottomSheet] = useState(false);

  const handleOpenBottomSheet = (isOpen: boolean) => {
    setIsOpenBottomSheet(isOpen);
  };

  return (
    <StripeProvider
      publishableKey={process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY!}
      merchantIdentifier="merchant.pade" // required for Apple Pay
      urlScheme="myapp" // required for 3D Secure and bank redirects
    >
      <SafeAreaView className="h-full">
        <GestureHandlerRootView className="w-full h-full">
          <ScrollView className="bg-[#ccd8d5] relative  px-5 py-4 w-full h-full">
            {/* Header */}
            <View className="flex-row items-center justify-start gap-x-5">
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Image className="w-6 h-6" source={icons.backArrow} />
              </TouchableOpacity>
              <Text style={styles.mainText}>Chi tiết thanh toán</Text>
            </View>

            <View className="bg-white absolute left-0 top-16 w-full h-[600px] p-3 rounded-2xl flex-col gap-y-2">
              <View className="flex-row justify-between items-center">
                <Text style={styles.mainText}>Vincom Center Đồng Khởi</Text>
                <Text>7.5 km</Text>
              </View>
              <ControlTimeInAndOut />

              <View className="flex-col justify-center items-center ">
                <Text style={styles.mainText}>Phi tam tinh</Text>
                <Text className="font-JakartaExtraBold text-[24px] text-primary-500 ">
                  75.000 d
                </Text>
              </View>

              <View
                className="flex-row justify-between items-center py-2
        border-y-[1px] border-dashed border-general-200 "
              >
                <View className="flex-col gap-1 items-start">
                  <Text style={styles.subText}>Loại xe</Text>
                  <Text style={styles.mainText} className="font-400">
                    xe 4 cho
                  </Text>
                </View>

                <View className="flex-col gap-1 items-start">
                  <Text style={styles.subText}>Biển số</Text>
                  <Text className="font-400" style={styles.mainText}>
                    A-BJ120-KH
                  </Text>
                </View>
              </View>

              <View className="w-full flex-col gap-3 items-center justify-center">
                <Text className="text-4 text-">Quét mã QR khi vào bãi đỗ</Text>
                <View className="border-[1px] border-general-200 bg-white p-8 shadow-2xl  ">
                  <QRCode
                    value="Just some string value"
                    size={180}
                    logoBackgroundColor="transparent"
                    logo={images.momo}
                  />
                </View>
              </View>
            </View>

            <Payment setIsOpenBottomSheet={handleOpenBottomSheet} />
          </ScrollView>

          {isOpenBottomSheet && (
            <BottomSheet ref={bottomSheetRef} snapPoints={["90%"]} index={0}>
              <BottomSheetView>
                <View className="relative flex-col items-center justify-center px-4 gap-y-3">
                  <View
                    className="relative flex-row w-full  pb-4 
                    bg-white  mb-2 border-b-[2px] border-general-200"
                  >
                    <Text className="w-full text-center text-[16px] text-black font-JakartaMedium ">
                      Ví MoMo và chuyển khoản
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        setIsOpenBottomSheet(false);
                      }}
                      className="absolute top-0 right-4"
                    >
                      <Image source={icons.close} className="w-6 h-6" />
                    </TouchableOpacity>
                  </View>

                  <View
                    className="flex-col justify-center items-center z-10 bg-[#a50064] w-full rounded-2xl 
                    gap-y-2 pt-6"
                  >
                    <Text className="text-[16px] font-JakartaMedium text-white">
                      Qúy Khách Vui Lòng Quét Mã QR Để Thanh Toán
                    </Text>

                    <View className="bg-white p-4 rounded-lg border-2 border-yellow-400">
                      <QRCode size={180} logo={images.momo} />
                    </View>
                    <Text className="mt-4 text-white text-lg font-bold">
                      Chủ TK: Ngo Nguyen Duc Thang
                    </Text>
                    <Text className="mt-1 text-white text-base">
                      SĐT: 0902603499
                    </Text>

                    <View className="flex-col bg-white items-center rounded-2xl mb-6">
                      <View
                        className="  flex-row justify-between px-4 items-center
                      rounded-2xl"
                      >
                        <View className="border-r-[2px] border-[#a50064] ">
                          <Image
                            className="w-16 h-16 bg-transparent mr-4"
                            resizeMode="center"
                            source={images.momo}
                          />
                        </View>
                        <View className="w-72 flex-row justify-center gap-x-1 items-center flex-wrap">
                          {bankIcons.map((icon, index) => (
                            <Image
                              key={index}
                              className="w-12 h-12 bg-transparent "
                              resizeMode="contain"
                              source={{ uri: icon.image }}
                            />
                          ))}
                        </View>
                      </View>
                      <View className="bg-[#a50064] rounded-t-xl p-2 py-1">
                        <Text className="text-white font-JakartaBold">
                          VÍ ĐIỆN TỬ VÀ CÁC APP NGÂN HÀNG KHÁC
                        </Text>
                      </View>
                    </View>
                  </View>

                  <Text className="text-gray-500 text-[16px] ">
                    Mã QR sẽ hết hạn sau:{" "}
                    <Text className="text-blue-600">10:30</Text>
                  </Text>

                  <View className=" border-primary-500  border-[1px] rounded-md w-full py-1 ">
                    <TouchableOpacity className="flex-row items-center justify-center">
                      <FontAwesomeIcon icon={faQrcode} color="#0286ff" />
                      <Text className="ml-1 text-primary-500 mb-1 text-center font-JakartaBold">
                        In mã QR
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </BottomSheetView>
            </BottomSheet>
          )}
        </GestureHandlerRootView>
      </SafeAreaView>
    </StripeProvider>
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
