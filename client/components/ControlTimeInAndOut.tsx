import React, { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useFindPlaceFilter } from "@/store";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import moment from "moment";

const ControlstimeInAndOut = ({
  showDetail,
  mainTextStyle,
  subTextStyle,
}: {
  showDetail?: boolean;
  mainTextStyle?: string;
  subTextStyle?: string;
}) => {
  const styles = StyleSheet.create({
    mainText: {
      fontSize: 13,
      fontWeight: "800",
      color: mainTextStyle ? "" : "#151551",
    },
    subText: {
      fontSize: 13,
      fontWeight: "500",
      color: subTextStyle ? "white" : "#818382",
    },
  });
  const {
    times,
    totalHour,
    totalPrice,
    setTimes,
    setTotalHour,
    setTotalPrice,
  } = useFindPlaceFilter();
  const { startTime, endTime } = times;
  const [isDateinPickerVisible, setDatePickerInVisibility] =
    React.useState(false);
  const [isDateoutPickerVisible, setDatePickerOutVisibility] =
    React.useState(false);

  React.useEffect(() => {
    if (startTime && endTime) {
      const totalMinute = moment(endTime).diff(moment(startTime), "minutes");
      setTotalHour(totalMinute / 60);
      setTotalPrice(
        totalHour >= 2
          ? 25 * 2 + (Math.ceil(totalHour) - 2) * 20
          : totalHour * 25
      );
    }
  }, [startTime, endTime]);

  return (
    <View className="bg-transparent flex-col ">
      <GestureHandlerRootView className="py-1">
        <View
          className="flex-row justify-between items-center 
    gap-3 rounded-xl "
        >
          <TouchableOpacity
            onPress={() => {
              setDatePickerInVisibility(true);
            }}
            className="flex-col  items-start gap-y-1"
          >
            <Text style={styles.subText} className={`${subTextStyle}`}>
              Giờ vào
            </Text>
            <Text style={styles.mainText} className={`${mainTextStyle}`}>
              {moment(startTime).format("MMM do | hh : mm a")}
            </Text>
          </TouchableOpacity>
          <View className="p-2 rounded-full bg-[#151551] ">
            <FontAwesomeIcon icon={faAngleRight} size={16} color="#fff" />
          </View>

          <TouchableOpacity
            onPress={() => {
              setDatePickerOutVisibility(true);
            }}
            className="flex-col gap-1 items-start gap-y-1"
          >
            <Text style={styles.subText} className={`${subTextStyle}`}>
              Giờ ra
            </Text>
            <Text style={styles.mainText} className={`${mainTextStyle}`}>
              {moment(endTime).format("MMM do | hh : mm a")}
            </Text>
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isDateinPickerVisible || isDateoutPickerVisible}
            mode="datetime"
            onConfirm={(date: Date) => {
              if (isDateinPickerVisible) {
                setTimes({
                  ...times,
                  startTime: date,
                });
                setDatePickerInVisibility(false);
              }
              if (isDateoutPickerVisible) {
                setTimes({
                  ...times,
                  endTime: date,
                });

                setDatePickerOutVisibility(false);
              }
            }}
            onCancel={() => {
              if (isDateinPickerVisible) {
                setDatePickerInVisibility(false);
              }
              if (isDateoutPickerVisible) {
                setDatePickerOutVisibility(false);
              }
            }}
          />
        </View>
      </GestureHandlerRootView>

      {showDetail && (
        <View className="border-t-[1px] border-general-200 pt-3 flex-row  items-center mt-4">
          <View className="flex-1">
            <Text className="text-gray-500 text-lg">Thời gian</Text>
            <Text className="text-blue-600 font-JakartaExtraBold text-[18px]">
              {Math.floor(totalHour) > 0 && Math.floor(totalHour) + " giờ"}{" "}
              {totalHour != Math.floor(totalHour) &&
               Math.floor((totalHour - Math.floor(totalHour))*60 ) + " phút"}
            </Text>
          </View>
          <View className="border-l-[1px] border-general-200 flex-1 items-end">
            <Text className="text-gray-500 text-lg">Phí tạm tính</Text>
            <Text className="text-blue-600 font-JakartaExtraBold text-[18px]">
              {totalPrice > 0 && totalPrice + ".000đ"}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default ControlstimeInAndOut;
