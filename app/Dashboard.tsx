import { Link } from "expo-router";
import { SafeAreaView, View } from "react-native";
import { MyText } from "../components/MyText";

export default function Home() {
  return (
    <SafeAreaView>
      <View>
        <MyText style={{ fontSize: 20 }} variant="thin">
          Hello <MyText>Someone</MyText>
        </MyText>
        <View>
          <MyText>test</MyText>
        </View>
      </View>
      <Link href="/">index</Link>
    </SafeAreaView>
  );
}
