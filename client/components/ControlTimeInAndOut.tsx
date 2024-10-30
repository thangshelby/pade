import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ControlTimeInAndOut = () => {
  return (
    <View className="flex-row justify-between items-center gap-3 rounded-xl">
      <View className="flex-col  items-start">
        <Text style={styles.subText}>Giờ vào</Text>
        <Text style={styles.mainText}>12 Tháng 5 | 09:00</Text>
      </View>
      <View className="p-2 rounded-full bg-[#151551] ">
        <FontAwesomeIcon icon={faAngleRight} size={16} color="#fff" />
      </View>
      <View className="flex-col gap-1 items-start">
        <Text style={styles.subText}>Giờ ra</Text>
        <Text style={styles.mainText}>12 Tháng 5 | 09:00</Text>
      </View>
    </View>
  );
};

export default ControlTimeInAndOut;

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
