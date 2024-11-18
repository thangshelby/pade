// import React, { useState } from 'react';
// import { View, Button, Image } from 'react-native';
// import { launchCamera } from 'react-native-image-picker';
// import axios from 'axios';

// const App = () => {
//   const [photoUri, setPhotoUri] = useState(null);

//   const takePhoto = () => {
//     launchCamera({ mediaType: 'photo' }, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else {
//         const uri = response.assets[0].uri;
//         setPhotoUri(uri);
//         uploadPhoto(uri);
//       }
//     });
//   };

//   const uploadPhoto = async (uri) => {
//     const formData = new FormData();
//     formData.append('file', {
//       uri: uri,
//       type: 'image/jpeg', // Adjust if necessary
//       name: 'photo.jpg',
//     });

//     try {
//       const response = await axios.post('https://your-server-url.com/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Photo uploaded successfully:', response.data);
//     } catch (error) {
//       console.log('Error uploading photo:', error);
//     }
//   };

//   return (
//     <View>
//       <Button title="Take Photo" onPress={takePhoto} />
//       {photoUri && <Image source={{ uri: photoUri }} style={{ width: 100, height: 100 }} />}
//     </View>
//   );
// };

// export default App;


import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants";

const Chat = () => {
  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text className="text-2xl font-JakartaBold">Chat</Text>
        <View className="flex-1 h-fit flex justify-center items-center">
          <Image
            source={images.message}
            alt="message"
            className="w-full h-40"
            resizeMode="contain"
          />
          <Text className="text-3xl font-JakartaBold mt-3">
            No Messages Yet
          </Text>
          <Text className="text-base mt-2 text-center px-7">
            Start a conversation with your friends and family
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chat;
