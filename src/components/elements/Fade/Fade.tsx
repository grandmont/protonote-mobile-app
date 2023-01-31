import { LinearGradient } from "expo-linear-gradient";

export default function Fade() {
  return (
    <LinearGradient
      colors={["rgba(255, 255, 255, 0)", "white", "white"]}
      style={{ position: "absolute", bottom: 0, width: "100%", height: 96 }}
      pointerEvents={"none"}
    />
  );
}
