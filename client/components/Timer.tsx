import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InvoiceCard from "@/components/InvoiceCard";
import { images, markersData } from "@/constants";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useRef, useState, useEffect } from "react";
import { useParkingStore } from "@/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Invoice } from "@/types/type";
import { useUser } from "@clerk/clerk-expo";
import { useInvoiceStore } from "@/store";
import moment from "moment";

const Timer = ({
  selectedInvoice,
  setIsOpenBottomSheet,
}: {
  selectedInvoice: Invoice;
  setIsOpenBottomSheet: (value: boolean) => void;
}) => {
  const { clearSelectedInvoice } = useInvoiceStore();
  const [duration, setDuration] = useState<moment.Duration>(moment.duration(0));
  const [initialRemainingTime, setInitialRemainingTime] =
    useState<moment.Duration>(moment.duration(0));

  const { user } = useUser();

  useEffect(() => {
    if (selectedInvoice) {
      const start = moment(selectedInvoice.startHour);
      const end = moment(selectedInvoice.endHour);
      const duration = moment.duration(end.diff(start));
      setDuration(duration);
      const now = moment();
      const initialRemainingTime = moment.duration(now.diff(start));

      setInitialRemainingTime(initialRemainingTime);
    }
  }, [selectedInvoice]);

  useEffect(() => {
    return () => {
      clearSelectedInvoice();
    };
  }, []);
  return (
    <BottomSheetView className="relative ">
      <View className="w-full bg-white  pt-12 flex-col items-center rounded-3xl  gap-y-4 ">
        <TouchableOpacity
          onPress={() => {
            setIsOpenBottomSheet(false);
          }}
          className=" z-40 absolute top-[-18] left-44"
        >
          <FontAwesomeIcon icon={faClose} size={30} color="black" />
        </TouchableOpacity>
        <View className="flex-col items-center">
          <Text
            className="font-JakartaExtraBold text-[#151551]
        
        text-[24px] font-800"
          >
            {markersData[selectedInvoice ? selectedInvoice.placeId : 0]?.title}
          </Text>
          <Text className="text-[#929292]">{user?.fullName}</Text>
        </View>
        {initialRemainingTime.asSeconds() < 0 && (
          <Text className="text-green-600 font-JakartaMedium">
            {" "}
            Hệ thống sẽ bắt đầu tính phí sau{" "}
            {Math.abs(Math.floor(initialRemainingTime.asMinutes()))} phút
          </Text>
        )}

        {duration.asSeconds() > 0 && (
          <View className=" rounded-full ">
            <CountdownCircleTimer
              strokeWidth={20}
              size={210}
              isPlaying
              duration={duration.asSeconds()}
              initialRemainingTime={
                duration.asSeconds() - initialRemainingTime.asSeconds()
              }
              colors={
                initialRemainingTime.asSeconds() >= 0
                  ? ["#33AD5F", "#33AD5F"]
                  : ["#808080", "#808080"]
              }
              colorsTime={[duration.asSeconds(), 0]}
            >
              {({ remainingTime }) => (
                <Image
                  source={{
                    uri: "https://ucarecdn.com/a2dc52b2-8bf7-4e49-9a36-3ffb5229ed02/-/preview/465x466/",
                  }}
                  className="w-full h-full z-40"
                  resizeMode="cover"
                ></Image>
              )}
            </CountdownCircleTimer>
          </View>
        )}

        <View className="flex-col items-center justify-center">
          <View className="flex-row justify-center items-center">
            <Text className="text-[20px] text-[#130F26] font-JakartaExtraBold">
              {selectedInvoice?.totalHour} hour
            </Text>
          </View>
          <Text className="tex-[14px] text-[#929292] font-JakartaMedium">
            {moment(selectedInvoice?.startHour).format("hh:mm a")}-
            {moment(selectedInvoice?.endHour).format("hh:mm a")}
            {"   "}
            {moment(selectedInvoice?.createdAt).format("DD/MM/YYYY")}
          </Text>
        </View>

        <View className="rounded-[40px] w-[300px] h-[110px] p-2 bg-[#130F26] flex-row items-center justify-around">
          <View>
            <Text className="text-[#AAAAAA] text-[18px] font-JakartaMedium">
              Biển số
            </Text>
            <Text className="text-white text-[20px] font-JakartaBold">
              30G49344
            </Text>
          </View>
          <Image
            className="w-[80] h-[80] rounded-full"
            source={{
              uri: "https://ucarecdn.com/dae59f69-2c1f-48c3-a883-017bcf0f9950/-/preview/1000x666/",
            }}
          />
        </View>

        <View className="bg-[#FED94D] w-[280px] py-3 rounded-3xl">
          <Text className="text-[18px] font-JakartaSemiBold text-black py-1 text-center">
            End Parking
          </Text>
        </View>
      </View>
    </BottomSheetView>
  );
};

export default Timer;
