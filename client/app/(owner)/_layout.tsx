import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";


const Layout = () => {
  return (
    <SafeAreaView>
      <GestureHandlerRootView className="w-full h-full">
        <Stack>
          <Stack.Screen
            name="about-pade"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="(input)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
            <Stack.Screen
            name="setup-parking-success"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </GestureHandlerRootView>
    </SafeAreaView>
   
  );
};

export default Layout;
