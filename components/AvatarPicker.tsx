import { useState } from "react";
import {
  GestureResponderEvent,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { avatars } from "./shared/Avatars";

interface Props {
  onChange: (avatar: string) => void;
}
export const AvatarPicker = (props: Props) => {
  const [avatar, setAvatar] = useState("");

  const handlePress = (e: GestureResponderEvent) => {};
  return (
    <View style={{ gap: 5, flexDirection: "row", flexWrap: "wrap" }}>
      {avatars.map((avatar, index) => (
        <TouchableOpacity onPress={handlePress}>
          <Image
            key={index}
            style={{
              height: 40,
              width: 40,
            }}
            source={avatar}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};
