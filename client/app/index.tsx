import { useAuth } from "@clerk/clerk-react";
import { Redirect } from "expo-router";
import {useEffect} from 'react'

const Page = () => {

  // const { isSignedIn } = useAuth();


  // if (isSignedIn) return <Redirect href="/(user)/(tabs)/home" />;
  // if (isSignedIn) return <Redirect href="/(owner)/(input)/input-layout" />;


  return <Redirect href="/(auth)/welcome" />;
};

export default Page;
