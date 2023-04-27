import React from "react";
import { Pressable, StyleProp, TextStyle, ViewStyle } from "react-native";
import { MyText } from "../MyText";

type ButtonVariant = "primary" | "secondary";
type Props = {
  onPress: () => void;
  size?: string;
  title?: string;
  variant?: ButtonVariant;
};
type ButtonProps = {
  button: StyleProp<ViewStyle>;
  text: StyleProp<TextStyle>;
};

const getStyles = (variant: ButtonVariant): ButtonProps => {
  return {
    button: [
      {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "hsl(30, 87%, 58%)",
      },
      variant === "secondary" && { backgroundColor: "hsl(30, 87%, 68%)" },
    ],
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "white",
    },
  };
};
export default function Button({
  onPress,
  title = "Submit",
  variant = "primary",
}: Props) {
  const styles = getStyles(variant);
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <MyText style={styles.text} variant="bold">
        {title}
      </MyText>
    </Pressable>
  );
}
