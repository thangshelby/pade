import React, { useRef } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { SafeAreaView } from "react-native-safe-area-context";
import { faArrowLeft, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import {
  faSliders,
  faHome,
  faPlus,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { PredictedPlaces } from "@/types/type";
import { useRouter } from "expo-router";
import {
  TouchableOpacity,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { useLocationStore } from "@/store";
import { historyPlaces } from "@/constants";
import { Platform } from "react-native";
import * as Location from "expo-location";
const SearchPlaceDetail = () => {
  const { setUserLocation } = useLocationStore();
  const router = useRouter();
  const [predictedPlaces, setPredictedPlaces] = useState<PredictedPlaces[]>([]);
  const [input, setInput] = useState<string>("");
  const [debounceId, setDebounceId] = useState<any | null>(null);
  const inputRef = useRef<TextInput>(null);
  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

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

  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const loading = false;

  const handleAskPermission = () => {
    (async () => {
      console.log("Ask permission");
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        setHasPermission(true);

        const location = await Location.getCurrentPositionAsync({});
  
        setUserLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          address: "My location",
        });
        Alert.alert("Location permission granted"); 
        router.push("/(user)/(tabs)/home");
      } else {
        setHasPermission(false);
        Alert.alert("Location permission denied");  
      }
    })(); 
  };

  // AUTO FETCH PLACES WHEN USER TYPE
  useEffect(() => {
    if (debounceId) {
      clearTimeout(debounceId);
    }

    const id = setTimeout(() => {
      if (input.length > 0) {
        fetchPlaceAutoComplete();
      }
    }, 500);

    setDebounceId(id);
  }, [input]);

  return (
    <GestureHandlerRootView>
      <SafeAreaView className="flex-col px-3  w-full gap-y-5">
        {/* SEARCH INPUT TEXT */}
        <View className="flex-row justify-between w-full">
          <View className="border-[2px] border-primary-500  font-600 flex-row items-center w-[80%] px-2">
            <TouchableOpacity
              onPress={() => {
                router.push("/(user)/(tabs)/home");
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} color="#151551" />
            </TouchableOpacity>
            <TextInput
              ref={inputRef}
              focusable={true}
              value={input}
              onChangeText={(text) => setInput(text)}
              placeholder="Tìm kiếm địa điểm "
              placeholderTextColor={"#151551"}
              className="ml-3 font-semibold"
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              router.push("/(user)/park-filter");
            }}
            className="border-[1px] border-general-200 p-4 bg-white"
          >
            <FontAwesomeIcon icon={faSliders} />
          </TouchableOpacity>
        </View>
        {/* SEARCH INPUT TEXT */}

        <View className="flex-row justify-between w-full">
          <View className="flex-row items-center space-x-2 bg-green-100  px-4 py-2 rounded-full ">
            <FontAwesomeIcon icon={faHome} color="green" />
            <Text className="text-green-600">NHÀ RIÊNG</Text>
          </View>

          <View className="flex-row items-center space-x-2 bg-yellow-100  px-4 py-2 rounded-full">
            <FontAwesomeIcon icon={faBriefcase} color="yellow" />
            <Text className="text-yellow-600">CÔNG TY</Text>
          </View>
          <Pressable
            onPress={handleAskPermission}
            className="flex-row items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full"
          >
            <View className="p-2 bg-blue-700 rounded-full">
              <FontAwesomeIcon icon={faPlus} color="white" size={8} />
            </View>
            <Text className=" text-blue-600">Vị trí của tôi</Text>
          </Pressable>
        </View>

        <View>
          <Text style={styles.mainText}>Gợi ý điểm đến </Text>

          <FlatList
            data={input.length > 0 ? predictedPlaces : historyPlaces}
            ItemSeparatorComponent={() => (
              <View className="border-t-[1px] border-general-200" />
            )}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  fetchPlaceDetail(item.placeId).then((location) => {
                    setUserLocation(location);
                  });

                  router.push("/(user)/(tabs)/home");
                }}
                className="flex-row my-6  items-center"
              >
                <View className="flex-col gap-y-3 items-center justify-center">
                  <FontAwesomeIcon icon={faLocationDot} color="#151551" />
                  <Text className="text-[#151551]">
                    {Math.floor(item.distance / 1000)} km
                  </Text>
                </View>

                <View className="flex-col gap-y-2 items-start justify-center px-3">
                  <Text numberOfLines={1} style={styles.mainText}>
                    {item.description.split(",")[0]}
                  </Text>
                  <Text
                    numberOfLines={1}
                    className="text-general-200 font-JakartaMedium"
                  >
                    {item.description}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default SearchPlaceDetail;

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
