import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

import { Slot } from "expo-router";
import React from "react";

const fonts = {
  "mplus-bold": require("../assets/fonts/mplus-bold.ttf"),
  "mplus-extraBold": require("../assets/fonts/mplus-extrabold.ttf"),
  "mplus-light": require("../assets/fonts/mplus-light.ttf"),
  "mplus-regular": require("../assets/fonts/mplus-regular.ttf"),
  "mplus-thin": require("../assets/fonts/mplus-thin.ttf"),
};

export type Fonts = keyof typeof fonts;

const Index = () => {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <Slot />
    </SafeAreaProvider>
  );
};

export default Index;
