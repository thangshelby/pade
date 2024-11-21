import React, { useState } from "react";
import { View, Text, Image, Platform, Pressable } from "react-native";
import { icons } from "@/constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import BottomSheetAnimatedView from "@gorhom/bottom-sheet";

const Pictures = ({
  isBlur,
  setIsBlur,
}: {
  isBlur: boolean;
  setIsBlur: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [imagesUri, setImagesUri] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );

  const handleBottomSheet = (index?: number) => {
    if (isBlur) {
      setIsBlur(false);
      setCurrentImageIndex(null);
    } else {
      setIsBlur(true);
      setCurrentImageIndex(index!!);
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [6, 8], // Aspect ratio
      quality: 1, // Image quality
    });

    if (!result.canceled) {
      setImagesUri([...imagesUri, result.assets[0].uri]);

      // formData.append("file", {
      //   uri: result.assets[0].uri,
      //   type: "image/jpeg", // Loại file ảnh
      //   name: "your_image.png", // Tên file ảnh
      // });

      // fetch("http://192.168.42.1:3000/upload", {
      //   method: "POST",
      //   body: formData,
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log("File uploaded successfully:", data);
      //   })
      //   .catch((error) => {
      //     console.error("Error uploading file:", error);
      //   });
    }
  };

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImagesUri([...imagesUri, result.assets[0].uri]);
    }
  };
  return (
    <Pressable
      onPress={() => {
        setIsBlur(false);
        setCurrentImageIndex(null);
      }}
      className="flex-col  relative w-full h-screen px-6 gap-y-4"
    >
      <View className="flex-col   mt-20">
        <Text className="text-[24px] font-JakartaBold">
          {imagesUri.length > 0 ? "Ảnh của bạn" : "Bắt đầu với ảnh của bạn"}
        </Text>

        <Text className="text-[20px] font-JakartaLight text-general-200">
          {imagesUri.length > 0
            ? "Keo và thả để sắp xếp ảnh của bạn"
            : "Bạn sẽ cần 5 bức ảnh để bắt đầu. Về sau,bạn vãn có thể đăng thêm và thay đổi ảnh"}
        </Text>
      </View>

      {imagesUri.length > 0 ? (
        <View
          className={`${isBlur && "opacity-40"} flex-row flex-wrap justify-between items-center py-6 gap-y-12`}
        >
          {imagesUri.map((uri, index) => (
            <TouchableOpacity
              key={uri}
              className="w-[260px] h-[260px] overflow-hidden relative  rounded-lg "
            >
              <View className="absolute top-3 right-3 bg-white p-2 py-4 z-20 rounded-full">
                <TouchableOpacity
                  onPress={() => handleBottomSheet(index)}
                  className="
              flex-row justify-center items-center gap-x-1  rounded-full z-20"
                >
                  <View className="bg-black p-[2px] rounded-full" />
                  <View className="bg-black p-[2px] rounded-full" />
                  <View className="bg-black p-[2px] rounded-full" />
                </TouchableOpacity>
              </View>
              {index == 0 && (
                <View className="absolute  flex-row justify-center items-center top-3 left-3 bg-white p-2 px-4  z-20 rounded-full">
                  <Text>Bìa</Text>
                </View>
              )}

              <Image className="w-full h-full" source={{ uri: uri }} />
            </TouchableOpacity>
          ))}

          <TouchableOpacity
            onPress={pickImage}
            className="w-[260px] h-[260px] flex-col justify-center items-center  border-dashed border-2 border-gray-300 rounded-lg gap-y-2"
          >
            <Image className="w-8 h-8" source={icons.plus} />
            <Text className="font-medium text-[16px] text-general-200">
              Thêm ảnh
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View className="flex-col gap-y-4">
          <TouchableOpacity
            onPress={pickImage}
            className="flex-row gap-x-4 p-4 py-5  items-center border-[1px] border-d border-gray-300 rounded-lg"
          >
            <Image className="w-8 h-8" source={icons.plus} />
            <Text className="font-medium text-[16px] text-general-200">
              Thêm ảnh
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={takePhoto}
            className="flex-row gap-x-4 p-4 py-5  items-center border-[1px] border-gray-300 rounded-lg"
          >
            <Image className="w-8 h-8" source={icons.cameraPicture} />
            <Text className="font-medium text-[16px]">Chụp ảnh mới</Text>
          </TouchableOpacity>
        </View>
      )}

      {isBlur && (
        <BottomSheetAnimatedView snapPoints={["40%"]}>
          <View></View>
        </BottomSheetAnimatedView>
      )}
    </Pressable>
  );
};

export default Pictures;
