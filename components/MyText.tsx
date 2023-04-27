import { Text, TextProps } from "react-native";
import { Fonts } from "../app/_layout";

type TextVariant = Fonts extends `mplus-${infer Variant}` ? Variant : never;

type MyTextProps = {
  variant?: TextVariant;
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
