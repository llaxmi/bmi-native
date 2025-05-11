import {
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import Home from "../screens/Home";

SplashScreen.preventAutoHideAsync();

export default function Page() {
  const [fontsLoaded] = useFonts({
    "Raleway-Regular": Raleway_400Regular,
    "Raleway-Medium": Raleway_500Medium,
    "Raleway-SemiBold": Raleway_600SemiBold,
    "Raleway-Bold": Raleway_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={{ flex: 1 }}
      onLayout={async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }}
    >
      <Home />
    </View>
  );
}
