import { Avatar } from "@rneui/base";
import { useRouter, Link } from "expo-router";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MyText } from "../components/MyText";
import Button from "../components/shared/Button";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{ backgroundColor: "#fcf5f3", height: "100%", padding: 10 }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <MyText style={{ fontSize: 20 }} variant="light">
          Hello <MyText variant="bold">Trash</MyText>
        </MyText>
        <Avatar
          size={40}
          rounded
          source={{ uri: "https://randomuser.me/api/portraits/women/60.jpg" }}
        />
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ height: 120, width: 120 }}
            source={require("../assets/fox.png")}
          />
          <Button
            title="Add a Child"
            onPress={() => {
              router.push("/AddUser");
            }}
          />
          <MyText>Start working towards your goals!</MyText>
        </View>
      </View>
      <View>
        <Link href="/">Go To Home</Link>
      </View>
    </SafeAreaView>
  );
}
