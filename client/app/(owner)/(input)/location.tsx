import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import Map from "@/components/Map";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  faClose,
  faLocationArrow,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import BottomSheet from "@gorhom/bottom-sheet";
import { PredictedPlaces } from "@/types/type";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { useSetUpParkingStore } from "@/store";

const Location = ({
  isBlur,
  setIsBlur,
}: {
  isBlur: boolean;
  setIsBlur: (isOpen: boolean) => void;
}) => {
  const {parkingLocation, setParkingLocation } = useSetUpParkingStore();
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const inputFieldRef = React.useRef<TextInput>(null);

  const [predictedPlaces, setPredictedPlaces] = useState<PredictedPlaces[]>([]);
  const [placeInput, setPlaceInput] = useState<string>("");
  const [debounceId, setDebounceId] = useState<any | null>(null);
  const [location, setLocation] = useState<string | null>(null);

  const fetchPlaceAutoComplete = async () => {
    try {
      const response = await fetch(
        `http://192.168.42.1:3000/map/api/place/autocomplete/${placeInput}`,
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
      console.log('error:',error);
    }
  };
  const fetchPlaceDetail = async (placeId: string) => {
    const response = await fetch(
      `http://192.168.42.1:3000/map/api/place/detail/${placeId}`
    );
    const data = await response.json();
    console.log(data.location)
    return data.location;
  };


  const handleFetchPlaceDetailAndSetLocation = async (selectedPlace: PredictedPlaces) => {
    fetchPlaceDetail(selectedPlace.placeId).then((location) => {
      setLocation(selectedPlace.description);
      setParkingLocation({
        latitude: location.latitude,
        longitude: location.longitude,
        address: selectedPlace.description,
      });
      setIsBlur(false);
      setPredictedPlaces([]);
    });
  };

  useEffect(() => {
    if (debounceId) {
      clearTimeout(debounceId);
    }

    if (placeInput.length > 0) {
      const id = setTimeout(() => {
        fetchPlaceAutoComplete();
      }, 2000);

      setDebounceId(id);
    }
  }, [placeInput]);

  useEffect(() => {
    if (inputFieldRef.current) {
      inputFieldRef.current.focus();
    }
  }, [inputFieldRef]);

  return (
    <View className="flex-col  relative w-full h-screen">
      <View className="flex-col px-6 gap-y-1 mt-4">
        <Text className="text-[24px] font-JakartaBold">Chỗ của bạn ở đâu</Text>

        <Text className="text-[20px] font-JakartaLight text-general-200">
          Địa chỉ của bạn sẽ được chia sẻ với khách hàng sau khi đặt chỗ thành
          công
        </Text>
      </View>

      {isBlur ? (
        <BottomSheet
          detached={true}
          ref={bottomSheetRef}
          snapPoints={[3000]}
          index={0}
          enablePanDownToClose={true}
          onClose={() => {
            setIsBlur(false);
          }}
        >
          <View className="w-full h-full p-6 bg-white gap-y-8 z-50">
            <View className="p-4  bg-gray-100 flex-row  items-center rounded-3xl overflow-hidden">
              <FontAwesomeIcon icon={faLocationDot} size={24} />
              <TextInput
                ref={inputFieldRef}
                value={placeInput}
                onChangeText={(text) => {
                  setPlaceInput(text);
                }}
                className="ml-6 text-[16px] font-JakartaBold flex-1 "
                placeholder="Nhập địa chỉ của bạn"
              />

              {placeInput.length > 0 && (
                <TouchableOpacity
                  className="p-1 bg-white rounded-full"
                  onPress={() => {
                    setPlaceInput("");
                    setPredictedPlaces([]);
                  }}
                >
                  <FontAwesomeIcon icon={faClose} size={20} />
                </TouchableOpacity>
              )}
            </View>

            {predictedPlaces.length > 0 && placeInput.length > 0 && (
              <FlatList
                style={{ height: 10 }}
                className=" overflow-y-scroll "
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      handleFetchPlaceDetailAndSetLocation(item);
                    }}
                    className="flex-row gap-x-4 items-center justify-start"
                  >
                    <View className="p-4  bg-gray-200 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faBuilding} size={26} />
                    </View>
                    <View className="gap-y-1">
                      <Text className="text-[20px] font-JakartaMedium">
                        {item.description.split(",")[0]}
                      </Text>
                      <Text className="text-general-200 text-[16px] font-JakartaLight">
                        {item.description.split(",").slice(1).join(",")}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
                ItemSeparatorComponent={() => (
                  <View className="border-t-[1px] border-general-300 p-1 w-full my-6" />
                )}
                keyExtractor={(item, index) => index.toString()}
                data={predictedPlaces}
              />
            )}

            <View className="w-full flex-1">
              <TouchableOpacity className="flex-row gap-x-4 items-center px-6 z-50">
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  color="gray"
                  size={24}
                />
                <Text className="text-general-200 underline font-JakartaMedium">
                  Sử dụng vị trí hiện tại của tôi
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheet>
      ) : (
        <View className="w-full h-full mt-6 pt-6 relative">
          <View className="absolute top-12 left-8  rounded-3xl w-[90%] overflow-hidden z-40">
            <TouchableOpacity
              onPress={() => {
                setIsBlur(true);
              }}
              className="p-4  gap-x-4 bg-white flex-row  items-center"
            >
              <FontAwesomeIcon icon={faLocationDot} size={24} />
              <Text className="text-[16px] font-JakartaBold pr-3">
                {location ? location : "Nhập địa chỉ của bạn"}
              </Text>
            </TouchableOpacity>
          </View>

          <Map />
        </View>
      )}
    </View>
  );
};

export default Location;
