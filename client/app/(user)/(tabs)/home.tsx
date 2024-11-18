import { router } from "expo-router";
import { View, TouchableOpacity, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GoogleTextInput from "@/components/GoogleTextInput";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Map from "@/components/Map";
import { icons } from "@/constants";
import { useLocationStore, useParkingStore } from "@/store";
import ControlTimeInAndOut from "@/components/ControlTimeInAndOut";
import {
  faSliders,
  faArrowLeft,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import LocationOverview from "@/components/LocationOverview";
import { useAuth, useUser } from "@clerk/clerk-expo";

const Home = () => {
  const { signOut } = useAuth();
  const {
    setUserLocation,
    userLatitude,
    userLongitude,
    clearUserLocation,
    destinationAddress,
    clearDestinationLocation,
  } = useLocationStore();
  const { clearSelectedParking } = useParkingStore();

  const handleDestinationPress = (location: {
    latitude: number;
    longitude: number;
    address: string;
  }) => {
    setUserLocation(location);
  };

  return (
    <SafeAreaView className="relative">
      <Map />
      {/* <View
        className="absolute top-8 left-4  z-50 p-3
            rounded-full shadow-md shadow-neutral-300"
      >
        <TouchableOpacity
          onPress={() => {
            signOut();
            router.replace("/(auth)/sign-in");
          }}
        >
          <FontAwesomeIcon icon={faSignOut} size={20} color="black" />
        </TouchableOpacity>
      </View> */}
      {!userLatitude && !userLongitude ? (
        <View className="absolute bottom-28 left-0  z-50 px-6 w-[100%]">
          <View className="flex-row justify-between items-center">
            <GoogleTextInput
              icon={icons.point}
              containerStyle="flex-row items-center justify-start bg-white shadow-md shadow-neutral-300 py-2 overflow-hidden border-[1px] border-general-200 w-[95%]"
              handlePress={handleDestinationPress}
            />

            <Pressable
              onPress={() => {
                router.push("/(user)/park-filter");
              }}
              className="border-[1px] border-general-200 p-4 bg-white"
            >
              <FontAwesomeIcon icon={faSliders} />
            </Pressable>
          </View>

          <View className="bg-white border-[1px] border-general-200 p-4 mt-4  ">
            <ControlTimeInAndOut />
          </View>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => {
            clearDestinationLocation();
            clearSelectedParking();
            clearUserLocation();
          }}
          className="absolute top-8 left-8  z-50 p-3 bg-white
            rounded-full shadow-md shadow-neutral-300"
        >
          <FontAwesomeIcon icon={faArrowLeft} size={16} color="black" />
        </TouchableOpacity>
      )}

      {destinationAddress && (
        <View className="absolute bottom-24 left-16 z-30">
          <LocationOverview />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;
