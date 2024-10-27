import { View, Text, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { navBarItems } from "@/constants";
import CustomButton from "./CustomButton";
const Navbar = ({
  currentNavbarItem,
  handlePress,
  navbarOpacity,
  title,
}: {
  handlePress: (item: string) => void;
  currentNavbarItem: string;
  navbarOpacity: number;
  title: string;
}) => {
  return (
    <View
      className={`absolute top-6  left-0 text-white h-[60px] 
      flex-row items-center justify-between z-30 w-full     `}
    >
      <View className="w-full h-full px-4 z-40 flex-row justify-between items-center">
        <View className="flex-row items-center">
          <View className="mr-4">
            <FontAwesomeIcon icon={faArrowLeft} color="white" size={24} />
          </View>
        </View>
        <View className="flex-row items-center gap-x-4">
          <FontAwesomeIcon icon={faBookmark} color="white" size={24} />
          <FontAwesomeIcon icon={faEllipsisV} color="white" size={24} />
        </View>
      </View>

      <View
        className={`opacity-${navbarOpacity - 10} w-full  h-full top-0 left-0 bg-blue-500 z-20 flex-col
        justify-center items-start  ${navbarOpacity <= 0 ? "invisible" : "absolute"}`}
      >
        <View className="px-14 ">
          <Text className="text-white font-JakartaBold">{title}</Text>
          <Text className="text-white font-JakartaMedium text-[14px]">
            Quận Tân Bình, Thành phố HCM
          </Text>
        </View>
        <View
          className="bg-white absolute top-[60px] shadow-md w-full flex-row justify-between 
        items-center px-8 font-JakartaExtraBold overflow-hidden"
        >
          {navBarItems.map((item) => (
            <Pressable
              onPress={() => {
                handlePress(item.title);
              }}
              key={item.title}
            >
              <Text
                className={`font-JakartaSemiBold h-full py-2 ${
                  currentNavbarItem == item.title &&
                  "border-b-[2px] z-50 border-primary-500 text-primary-500 "
                }`}
              >
                {item.title}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Navbar;
