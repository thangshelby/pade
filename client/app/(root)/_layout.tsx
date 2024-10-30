import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="find-ride" options={{ headerShown: false }} />
      <Stack.Screen
        name="confirm-ride"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="book-ride"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="search-place-detail"
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
        name="park-filter"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="park-detail" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
