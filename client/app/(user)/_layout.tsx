import { Stack } from "expo-router";
const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(owner)" options={{ headerShown: false }} />

      <Stack.Screen
        name="search-place-detail"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="park-detail" options={{ headerShown: false }} />
      <Stack.Screen
        name="park-filter"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="park-reserve"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="park-success"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="payment-detail"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="discount"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default Layout;
