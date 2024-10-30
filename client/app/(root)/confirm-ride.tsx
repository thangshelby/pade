import { router } from "expo-router";
import { FlatList, View } from "react-native";
import CustomButton from "@/components/CustomButton";
import DriverCard from "@/components/DriverCard";
import RideLayout from "@/components/RideLayout";
import { useDriverStore,useLocationStore } from "@/store";
import { markersData } from "@/constants";

const ConfirmRide = () => {

  const {setDestinationLocation} = useLocationStore();
  const { drivers, selectedDriver,setSelectedDriver } = useDriverStore();

  return (
    <RideLayout title={"Choose a Rider"} snapPoints={["50%"]}>
      
      <FlatList
      scrollEnabled={true}
        data={markersData}
        className="z-40 h-[50px] overflow-hidden bg-blue-300"
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <DriverCard
            item={item}
            selected={selectedDriver!}
            setSelected={() => 
            {
              setDestinationLocation({
                latitude: item.latitude!,
                longitude: item.longitude!,
                address: item.title
              })
              setSelectedDriver(item.id!)}
            }
          />
        )}
        ListFooterComponent={() => (
          <View className="mx-5 mt-10">
            <CustomButton
              title="Choose"
              onPress={() => router.push("/(root)/book-ride")}
            />
          </View>
        )}
      />  
    </RideLayout>
  );
};

export default ConfirmRide;
