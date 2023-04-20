import { useFonts } from "expo-font";

import { Slot } from "expo-router";
import React from "react";

const Index = () => {
  const [fontsLoaded] = useFonts({
    "mplus-light": require("../assets/fonts/mplus-light.ttf"),
    "mplus-regular": require("../assets/fonts/mplus-regular.ttf"),
    "mplus-thin": require("../assets/fonts/mplus-thin.ttf"),
  });

  if (!fontsLoaded) return null;

  return <Slot />;
};

export default Index;
