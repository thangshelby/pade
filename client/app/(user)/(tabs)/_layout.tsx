import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCompass,
  faUser,
  faInfo,
  faBookmark,
  IconDefinition,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";


const TabIcon = ({
  source,
  focused,
}: {
  source: IconDefinition;
  focused: boolean;
}) => (
  <View 
    className={`   w-[80%] flex-col justify-center items-center gap-y-6
     ${focused &&'border-t-[2px] border-[#151551]'} `}
  >
    <FontAwesomeIcon
      icon={source}
      size={24}
      color={focused ? "#151551" : "gray"}
    />
  </View>
);

export default function Layout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: {
          fontSize: 14,
          marginTop:20 ,
          fontWeight: "bold",
          color: "#151551",
        },
        tabBarStyle: {
          
          paddingTop: 20, // ios only
          overflow: "hidden",
          height: 80,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Bãi đỗ xe",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={faCompass} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="invoice"
        options={{
          title: "Hóa đơn",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={faBookmark} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={faMessage} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Tài khoản",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={faUser} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
