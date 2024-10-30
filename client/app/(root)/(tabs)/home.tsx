import { useUser } from "@clerk/clerk-expo";
import { useAuth } from "@clerk/clerk-expo";
import { router } from "expo-router";
import { View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GoogleTextInput from "@/components/GoogleTextInput";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Map from "@/components/Map";
import { icons } from "@/constants";
import { useLocationStore} from "@/store";
import ControlTimeInAndOut from "@/components/ControlTimeInAndOut";
import { faSliders, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LocationOverview from "@/components/LocationOverview";

const Home = () => {
  const { user } = useUser();
 
  const { setUserLocation, userLatitude, userLongitude, clearUserLocation ,destinationAddress} =
    useLocationStore();

  const handleDestinationPress = (location: {
    latitude: number;
    longitude: number;
    address: string;
  }) => {
    setUserLocation(location);

    router.push("/(root)/confirm-ride");
  };

  return (
    <SafeAreaView className="relative">
      <Map />

      {!userLatitude && !userLongitude ? (
        <View className="absolute bottom-28 left-0  z-50 px-6 w-[100%]">
          <View className="flex-row justify-between items-center">
            <GoogleTextInput
              icon={icons.point}
              containerStyle="flex-row items-center justify-start bg-white shadow-md shadow-neutral-300 py-2 overflow-hidden border-[1px] border-general-200 w-[95%]"
              handlePress={handleDestinationPress}
            />

            <View className="border-[1px] border-general-200 p-4 bg-white">
              <FontAwesomeIcon icon={faSliders} />
            </View>
          </View>

          <View className="bg-white p-4 border-[1px] border-general-200 mt-5">
            <ControlTimeInAndOut />
          </View>
        </View>
      ) : (
        <View className="z-30">
         
          <TouchableOpacity
            onPress={() => {
              clearUserLocation();
            }}
            className="absolute top-10 left-6  z-50 p-3 bg-white rounded-full "
          >
            <FontAwesomeIcon icon={faArrowLeft} size={16} />
          </TouchableOpacity>
        </View>
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

{
  /* <FlatList
data={recentRides?.slice(0, 5)}
renderItem={({ item }) => <RideCard ride={item} />}
keyExtractor={(item, index) => index.toString()}
className="px-5"
keyboardShouldPersistTaps="handled"
contentContainerStyle={{
  paddingBottom: 100,
}}
ListEmptyComponent={() => (
  <View className="flex flex-col items-center justify-center">
    {!loading ? (
      <>
        <Image
          source={images.noResult}
          className="w-40 h-40"
          alt="No recent rides found"
          resizeMode="contain"
        />
        <Text className="text-sm">No recent rides found</Text>
      </>
    ) : (
      <ActivityIndicator size="small" color="#000" />
    )}
  </View>
)}
ListHeaderComponent={
  <>
    <View className="flex flex-row items-center justify-between my-5 pr-6">
      <Text className="text-2xl font-JakartaExtraBold" >
        Welcome {user?.firstName}👋
      </Text>
      <TouchableOpacity
        onPress={handleSignOut}
        className="justify-center items-center w-10 h-10 rounded-full bg-white"
      >
        <Image source={icons.out} className="w-4 h-4" />
      </TouchableOpacity>
    </View>

    <GoogleTextInput
      icon={icons.search}
      containerStyle="bg-white shadow-md shadow-neutral-300  py-2 " 
      handlePress={handleDestinationPress}
    />

    <>
      <Text className=" z-0 text-xl font-JakartaBold mt-5 mb-3">
        Your current location
      </Text>
      <View className="flex flex-row items-center bg-transparent h-[300px]">
       
      </View>
    </>

  </>
}
/> */
}
