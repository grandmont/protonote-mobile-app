import { View } from "react-native-ui-lib";

type DividerSizeType = "small" | "regular" | "big";

interface DividerProps {
  size: DividerSizeType;
}

export default function Divider({ size }: DividerProps) {
  const dividerSize = {
    small: 36,
    regular: 96,
    big: 132,
  }[size];

  return (
    <View
      style={{
        // backgroundColor: "grey",
        height: dividerSize,
      }}
    />
  );
}
