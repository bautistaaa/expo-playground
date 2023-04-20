import { Text, TextProps } from "react-native";

type MyTextProps = {
  variant?: "light" | "regular" | "thin";
} & TextProps;

export const MyText = ({
  variant = "regular",
  children,
  ...props
}: MyTextProps) => {
  const { style, ...rest } = props;

  return (
    <Text
      style={{ fontFamily: `mplus-${variant}`, ...(style?.valueOf() as any) }}
      {...rest}
    >
      {children}
    </Text>
  );
};
