import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { View } from "react-native";

export default function Page() {
  return (
    <SafeAreaView>
      <View>
        <Link href="/Dashboard">Go To Dashboard</Link>
      </View>
    </SafeAreaView>
  );
}
