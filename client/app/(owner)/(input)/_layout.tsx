import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="onboarding"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="input-layout"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default Layout;
