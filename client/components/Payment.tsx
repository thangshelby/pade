import React, { useState, useEffect } from "react";
import { View, Text, Image, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { images } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useStripe } from "@stripe/stripe-react-native";


const Payment = ({
  setIsOpenBottomSheet
}:{
  setIsOpenBottomSheet: (isOpen:boolean)=>void
}) => {
 
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const [currentPaymentMethod, setCurrentPaymentMethod] = useState<
    "MoMo" | "card" | null
  >(null);

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(
      `http://192.168.42.1:3000/payment/payment-sheet`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { setupIntent, ephemeralKey, customer } = await response.json();

    return {
      setupIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    const { setupIntent, ephemeralKey, customer } =
      await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      setupIntentClientSecret: setupIntent,
    });
    if (!error) {
      setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert(
        "Success",
        "Your payment method is successfully set up for future payments!"
      );
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);
  return (
    <View className="mt-[650px]  mb-20 ">
      <View className="w-full flex flex-col gap-y-2">
        <Text className="text-[#151551] font-JakartaExtraBold">
          Phương thức thanh toán
        </Text>
        <TouchableOpacity
          onPress={() => {
            setCurrentPaymentMethod("MoMo");
          }}
          className="bg-white p-4 flex-row rounded-2xl justify-between  items-center"
        >
          <View className="flex-row items-center">
            <Image
              className="w-8 h-8"
              source={{
                uri: "https://cdn.tgdd.vn/2020/03/GameApp/Untitled-2-200x200.jpg",
              }}
            />
            <Text className="ml-3 font-JakartaSemiBold text-[#151551]">
              Ví MoMo
            </Text>
          </View>
          {currentPaymentMethod === "MoMo" && (
            <Image source={images.check} className="w-6 h-6" />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCurrentPaymentMethod("card");
          }}
          className="bg-white p-4 flex-row rounded-2xl justify-between  items-center"
        >
          <View className="flex-row items-center">
            <Image
              className="w-8 h-8"
              source={{
                uri: "https://png.pngtree.com/png-vector/20200718/ourlarge/pngtree-atm-card-banking-flat-icon-png-image_2307566.jpg",
              }}
            />
            <Text className="ml-3 font-JakartaSemiBold text-[#151551]">
              Debit Card or Credit Card
            </Text>
          </View>
          {currentPaymentMethod === "card" && (
            <Image source={images.check} className="w-6 h-6" />
          )}
        </TouchableOpacity>
      </View>

      <View className="flex flex-row w-full justify-between items-center mt-4">
        <TouchableOpacity
          onPress={() => {
            if (currentPaymentMethod === "MoMo") {
              setIsOpenBottomSheet(true);
            } else if (currentPaymentMethod === "card") {
              openPaymentSheet();
            }
          }}
          className="bg-yellow-500 w-[340px]  text-white px-6 py-2 rounded-lg"
        >
          <Text className="text-white text-center font-JakartaBold">
            Xác nhận thanh toán
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-yellow-100  text-yellow-500 px-4 py-3 rounded-lg">
          <FontAwesomeIcon icon={faPhone} />
        </TouchableOpacity>
      </View>

     
    </View>
  );
};

export default Payment;
