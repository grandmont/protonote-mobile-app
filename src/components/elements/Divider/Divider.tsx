import { View } from "react-native";

type DividerSizeType = "tiny" | "small" | "regular" | "big" | "huge";

interface DividerProps {
  size: DividerSizeType;
  showDividerLine?: boolean;
}

export default function Divider({
  size,
  showDividerLine = false,
}: DividerProps) {
  const dividerSize = {
    tiny: 24,
    small: 36,
    regular: 96,
    big: 132,
    huge: 200,
  }[size];

  return (
    <View
      style={{
        // backgroundColor: "grey",
        justifyContent: "center",
        height: dividerSize,
      }}
    >
      {showDividerLine && (
        <View
          style={{
            width: "100%",
            borderTopWidth: 2,
            borderColor: "#ededed",
          }}
        />
      )}
    </View>
  );
}
