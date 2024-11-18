import { Tabs } from "expo-router";
import { View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCompass,
  faUser,
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
          title: "Trang chủ",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={faCompass} focused={focused} />
          ),
        }}
      />
         <Tabs.Screen
        name="activity"
        options={{
          title: "Hoạt động",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={faMessage} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="tenant"
        options={{
          title: "Mục cho thuê",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={faBookmark} focused={focused} />
          ),
        }}
      />
   
      <Tabs.Screen
        name="profile"
        options={{
          title: "Hồ sơ ",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={faUser} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
