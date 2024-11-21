import { useUser } from "@clerk/clerk-expo";
import {
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import InputField from "@/components/InputField";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { images, profileFields } from "@/constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { useNavigation } from "expo-router";
import { icons } from "@/constants";

const Profile = () => {
  const router = useRouter();
  const { user } = useUser();

  return (
    <SafeAreaView className="flex-1">
      <GestureHandlerRootView>
        <ScrollView
          className="px-4 flex-col gap-y-2 relative"
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          <View className="flex-row justify-between items-center">
            <Text className="text-2xl font-JakartaBold my-5">Hồ sơ</Text>
            <FontAwesomeIcon icon={faBell} size={24} />
          </View>

          <View className="flex flex-row items-center justify-between my-5">
            <View className="flex-row items-center ">
              <Image
                source={{
                  uri: user?.externalAccounts[0]?.imageUrl ?? user?.imageUrl,
                }}
                className=" rounded-full h-[60px] w-[60px] border-[3px] border-white shadow-sm shadow-neutral-300"
              />
              <View className="flex flex-col justify-center ">
                <Text className="text-lg font-JakartaSemiBold ml-3">
                  {user?.fullName}
                </Text>
                <Text className="text-sm text-gray-500 ml-3">
                  Hiển thị hồ sơ
                </Text>
              </View>
            </View>
            <FontAwesomeIcon icon={faAngleRight} size={24} color="#151515" />
          </View>

          <TouchableOpacity
            onPress={() => {
              router.push("/(owner)/about-pade");
            }}
            className="w-full border-y-[2px] border-gray-300 py-6"
          >
            <View
              style={styles.shadow}
              className="flex-row justify-between items-center p-4 border-[1px] 
            border-gray-300 rounded-2xl bg-white "
            >
              <View className="w-[70%] flex flex-col gap-y-2">
                <Text className="font-JakartaSemiBold text-[18px] ">
                  Cho thuê bãi đỗ xe trên Pade
                </Text>
                <Text className="text-gray-400">
                  Bắt đầu kiếm tiền từ việc cho thuê bãi đỗ xe của bạn.
                </Text>
              </View>
              <Image className="w-20 h-20 rounded-xl" source={images.garage} />
            </View>
          </TouchableOpacity>
          <View className="flex flex-col items-start justify-center gap-y-4">
            {profileFields.map((field) => (
              <View
                key={field.title}
                className="flex flex-col mb-4 w-full justify-center "
              >
                <Text className="text-[20px] font-JakartaBold mb-4">
                  {field.title}
                </Text>
                {field.value.map((subField) => (
                  <TouchableOpacity
                    key={subField.sub_title}
                    className="flex flex-row items-center gap-x-2 border-b-[2px] 
                py-6 border-gray-300"
                  >
                    <FontAwesomeIcon
                      icon={subField.icon}
                      size={24}
                      color="#374151"
                    />
                    <Text className="text-[16px] font-Jakartalight text-gray-950">
                      {subField.sub_title}
                    </Text>

                    <View className="flex-1 justify-end flex-row">
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        size={24}
                        color="#151515"
                      />
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
          <View className="pl-20 flex-row justify-center items-center w-full ">
            <TouchableOpacity 
            onPress={()=>{
              router.push("/")
            }}
            className=" bg-gray-950  py-4 px-6 flex flex-row items-center justify-center gap-x-2 rounded-[36px] w-[80%]">
              <Image source={icons.switc} className="w-8 h-8" />
              <Text className="font-semibold text-[#f1f1f1] ">
                Sang chế độ cho thuê bãi đỗ xe
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

{
  /* <View className="flex flex-col items-start justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 px-5 py-3">
          <View className="flex flex-col items-start justify-start w-full">
            <InputField
              label="First name"
              placeholder={user?.firstName || "Not Found"}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />

            <InputField
              label="Last name"
              placeholder={user?.lastName || "Not Found"}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />

            <InputField
              label="Email"
              placeholder={
                user?.primaryEmailAddress?.emailAddress || "Not Found"
              }
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />

            <InputField
              label="Phone"
              placeholder={user?.primaryPhoneNumber?.phoneNumber || "Not Found"}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />
          </View>
        </View> */
}
