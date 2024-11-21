import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { icons } from "@/constants";
import { useUser } from "@clerk/clerk-expo";
import { Image } from "react-native";
import { useRef } from "react";
// import Video from "react-native-video";


const SetupParkingSuccess = () => {
  const { user } = useUser();
  const video = useRef(null);

  // const videoRef = useRef<VideoRef>(null);
  const background = require('./celebration.mp4');
  return (
    <View style={styles.container}>
      {/* <Video source={background}
       ref={videoRef}
        style={styles.video} /> */}
    </View>
  );
};

export default SetupParkingSuccess;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: 300,
  },
});
