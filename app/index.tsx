import { Link } from "expo-router";
import { SafeAreaView, View } from "react-native";

export default function Page() {
  return (
    <SafeAreaView>
      <View>
        <Link href="/Dashboard">Home</Link>
      </View>
    </SafeAreaView>
  );
}
