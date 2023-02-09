import { View } from "react-native-ui-lib";
// import { VictoryPie } from "victory-native";

import Divider from "../../../components/elements/Divider/Divider";
// import { pieData } from "../../../utils/fakeData";

export default function ChartsSection() {
  return (
    <View centerH>
      {/* Pie */}
      {/* <VictoryPie
        padding={0}
        height={250}
        colorScale={["#303030"]}
        labels={() => null}
        data={pieData}
      /> */}

      {/* Padding */}
      <Divider size="big" />
    </View>
  );
}
