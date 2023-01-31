import { LinearGradient } from "expo-linear-gradient";

interface FadeProps {
  top?: boolean;
  bottom?: boolean;
}

export default function Fade({ top, bottom }: FadeProps) {
  const styleOptions = {
    ...(top && { top: 0 }),
    ...(bottom && { bottom: 0 }),
  };

  const transparent = "rgba(255, 255, 255, 0)";

  const colors = top ? ["white", transparent] : [transparent, "white", "white"];

  return (
    <LinearGradient
      colors={colors}
      style={{
        position: "absolute",
        width: "100%",
        height: 100,
        ...styleOptions,
      }}
      pointerEvents="none"
    />
  );
}
