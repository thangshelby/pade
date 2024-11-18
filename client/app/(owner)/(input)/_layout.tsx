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
        name="parking-type"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="location"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="description"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="amenities"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="pictures"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="rental-price"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default Layout;
