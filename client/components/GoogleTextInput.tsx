import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { icons } from "@/constants";
import { GoogleInputProps, PredictedPlaces } from "@/types/type";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const googlePlacesApiKey = process.env.EXPO_PUBLIC_PLACES_API_KEY;

const GoogleTextInput = ({
  icon,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => {
  const [debounceId, setDebounceId] = useState<any | null>(null);
  const [predictedPlaces, setPredictedPlaces] = useState<PredictedPlaces[]>([]);
  const [input, setInput] = useState<string>("");
  const fetchPlaceAutoComplete = async () => {
    try {
      const response = await fetch(
        `http://192.168.42.1:3000/map/api/place/autocomplete/${input}`,
        {
          method: "GET",
          headers: {
            "X-Powered-By": "Express",
            "Content-Type": "application/json",
          },
        }
      );
      const data: { status: number; predictedPlaces: PredictedPlaces[] } =
        await response.json();
      setPredictedPlaces(data.predictedPlaces);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPlaceDetail = async (placeId: string) => {
    const response = await fetch(
      `http://192.168.42.1:3000/map/api/place/detail/${placeId}`
    );
    const data = await response.json();
    return data.location;
  };

  useEffect(() => {
    if (debounceId) {
      clearTimeout(debounceId);
    }

    const id = setTimeout(() => {
      fetchPlaceAutoComplete();
    }, 500);

    setDebounceId(id);
  }, [input]);

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
    listView: {
      backgroundColor: textInputBackgroundColor
        ? textInputBackgroundColor
        : "white",
      position: "absolute",
      bottom: -200,
      left: 0,
      width: "100%",
      height: 200,
      shadowColor: "#d4d4d4",
      zIndex: 50,
    },
  });

  return (
    <GestureHandlerRootView className="z-50">
      <View
        className={`flex flex-row items-center justify-start relative z-50 ${input.length > 0 ? "rounded-t-2xl" : "rounded-2xl"} ${containerStyle}`}
      >
        <View className=" justify-center items-center w-6 h-6 ml-5">
          <Image
            source={icon ? icon : icons.search}
            className="w-6 h-6"
            resizeMode="contain"
          />
        </View>
        <View className="w-full" style={styles.textInputContainer}>
          <TextInput
            value={input}
            onChangeText={(text) => setInput(text)}
            placeholder="Search"
            style={styles.textInput}
          />
        </View>
        {input.length > 0 && (
          <ScrollView
            className="bg-white border-t-[1px] px-[20px] z-50 overflow-hidden border-general-200 flex-col rounded-b-2xl  gap-y-[1px]"
            style={styles.listView}
          >
            {predictedPlaces.map((place) => (
              <Pressable
                className={`  flex-row justify-start items-center gap-x-2 py-4`}
                onPress={async () => {
                  const location: { latitude: number; longitude: number } =
                    await fetchPlaceDetail(place.placeId);
                  handlePress({
                    address: place.description,
                    latitude: location.latitude,
                    longitude: location.longitude,
                  });
                }}
                key={place.id}
              >
                <FontAwesomeIcon icon={faClock} size={20} />
                <Text style={styles.textInput} numberOfLines={1}>
                  {place.description}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        )}
      </View>
    </GestureHandlerRootView>
  );
};

export default GoogleTextInput;
