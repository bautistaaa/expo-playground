import { Link } from "expo-router";
import { SafeAreaView, View } from "react-native";
import { MyText } from "../components/MyText";

export default function Home() {
  return (
    <SafeAreaView>
      <View className="flex justify-between">
        <MyText style={{ fontSize: 20 }} variant="thin">
          Hello <MyText>Someone</MyText>
        </MyText>
        <View className="bg-black">
          <MyText>test</MyText>
        </View>
      </View>
      <Link href="/">index</Link>
    </SafeAreaView>
  );
}
