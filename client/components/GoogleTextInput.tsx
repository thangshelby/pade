import { View, Image, StyleSheet, TextInput } from "react-native";
import { icons } from "@/constants";
import { GoogleInputProps, PredictedPlaces } from "@/types/type";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

const GoogleTextInput = ({
  icon,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => {
  const router = useRouter();

  const styles = StyleSheet.create({
    textInputContainer: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      marginLeft: 6,
      position: "relative",
      shadowColor: "#d4d4d4",
    },
    textInput: {
      backgroundColor: textInputBackgroundColor
        ? textInputBackgroundColor
        : "white",
      fontSize: 14,
      fontWeight: "500",
      marginTop: 5,
      width: "100%",
      borderRadius: 200,
    },
  });

  return (
    <GestureHandlerRootView>
      <View className={`${containerStyle}`}>
        <View className=" justify-center items-center w-6 h-6 ml-5">
          <Image
            source={icon ? icon : icons.search}
            className="w-6 h-6"
            resizeMode="contain"
          />
        </View>
        <View className="w-full" style={styles.textInputContainer}>
          <TextInput
            onPress={() => {
              router.push("/(user)/search-place-detail");
            }}
            placeholder="Nhập điểm đến"
            style={styles.textInput}
          />
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default GoogleTextInput;
