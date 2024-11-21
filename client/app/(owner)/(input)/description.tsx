import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  Modal,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useSetUpParkingStore,carType } from "@/store";
import { TouchableOpacity } from "react-native-gesture-handler";
import SelectDropdown from "react-native-select-dropdown";
import { carAndImages } from "@/constants";
import DateTimePicker, {
} from "@react-native-community/datetimepicker";

const Description = () => {
  const { descriptions, setDescriptions } = useSetUpParkingStore();
  const [numberOfCar, setNumberOfCar] = React.useState(1);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [carType, setCarType] = React.useState<carType>("Xe 4 chỗ");
  const [openDateInput, setOpenDateInput] = React.useState(false);
  const [openTime, setOpenTime] = React.useState(new Date());
  const [closeTime, setCloseTime] = React.useState(new Date());

  return (
    <View className="flex-col  relative w-full h-screen px-6 gap-y-4">
      <View className="flex-col   mt-20">
        <Text className="text-[24px] font-JakartaBold">
          Chia sẻ thông tin cơ bản về chỗ đậu xe của bạn
        </Text>

        <Text className="text-[20px] font-JakartaLight text-general-200">
          Sau này bạn có thể chỉnh sửa thông tin này
        </Text>
      </View>

      <View>
        <View className="flex-row items-center justify-between py-6  border-b-[1px] border-gray-300">
          <Text className="text-[20px] font-700">Số lượng chỗ đậu xe </Text>
          <View className="flex flex-row items-center gap-x-4">
            <TouchableOpacity
              onPress={() => {
                setNumberOfCar(numberOfCar === 0 ? 0 : numberOfCar - 1);
              }}
              className="p-2 bg-white border-[1px] border-gray-200 rounded-full"
            >
              <FontAwesomeIcon icon={faMinus} size={16} />
            </TouchableOpacity>
            <Text className="text-[20px] font-JakartaLight">{numberOfCar}</Text>
            <TouchableOpacity
              onPress={() => {
                setNumberOfCar(numberOfCar + 1);
              }}
              className="p-2 bg-white border-[1px] border-gray-200 rounded-full"
            >
              <FontAwesomeIcon icon={faPlus} size={16} />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row items-center justify-between py-6  border-b-[1px] border-gray-300">
          <Text className="text-[20px] font-700">
            Loại xe lớn nhất có thể đổ{" "}
          </Text>
          <View className="flex flex-row items-center gap-x-4">
            <SelectDropdown
              data={carAndImages}
              onSelect={(selectedItem, index) => {
                setCarType(selectedItem.type);
              }}
              renderButton={(selectedItem, isOpened) => {
                return (
                  <View style={styles.dropdownButtonStyle}>
                    {selectedItem && (
                      <Image
                        source={{ uri: selectedItem.image }}
                        style={styles.dropdownButtonIconStyle}
                      />
                    )}
                    <Text style={styles.dropdownButtonTxtStyle}>
                      {(selectedItem && selectedItem.type) ||
                        `${descriptions.carType}`}
                    </Text>
                  </View>
                );
              }}
              renderItem={(item, index, isSelected) => {
                return (
                  <View
                    style={{
                      ...styles.dropdownItemStyle,
                      ...(isSelected && { backgroundColor: "#D2D9DF" }),
                    }}
                  >
                    <Image
                      source={{ uri: item.image }}
                      style={styles.dropdownItemIconStyle}
                    />
                    <Text style={styles.dropdownItemTxtStyle}>{item.type}</Text>
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
              dropdownStyle={styles.dropdownMenuStyle}
            />
          </View>
        </View>

        {/* TIME PICKER */}
        <View className="flex-row items-center justify-between py-6  border-b-[1px] border-gray-300">
          <Text className="text-[20px] font-700">Thời gian hoạt động </Text>
          <View className="flex flex-row items-center gap-x-4">
            <Text className="text-[40px]">
              <TouchableOpacity
                onPress={() => {
                  setOpenDateInput(true);
                }}
              >
                {openDateInput && (
                  <DateTimePicker
                    value={new Date()}
                    mode="time"
                    is24Hour={true}
                    display={Platform.OS === "ios" ? "spinner" : "default"}
                    onChange={(event, selectedDate) => {
                      setOpenDateInput(false);
                      setOpenTime(selectedDate ? selectedDate : new Date());
                    }}
                  />
                )}

                <Text className="text-[20px] font-medium">
                  {openTime.toTimeString().slice(0, 5)}
                </Text>
              </TouchableOpacity>{" "}
              -{" "}
              <TouchableOpacity
                onPress={() => {
                  setOpenDateInput(true);
                }}
              >
                {openDateInput && (
                  <DateTimePicker
                    value={new Date()}
                    mode="time"
                    is24Hour={true}
                    display={Platform.OS === "ios" ? "spinner" : "default"}
                    onChange={(event, selectedDate) => {
                      setOpenDateInput(false);
                      setCloseTime(selectedDate ? selectedDate : new Date());
                    }}
                  />
                )}
                <Text className="text-[20px] font-medium">
                  {closeTime.toTimeString().slice(0, 5)}
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Description;
const styles = StyleSheet.create({
  dropdownButtonStyle: {
    // maxWidth: 150,
    minWidth: 120,
    height: 50,
    backgroundColor: "#E9ECEF",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 6,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
