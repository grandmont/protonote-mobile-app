import { View } from "react-native-ui-lib";
import { VictoryPie } from "victory-native";

import Divider from "../../../components/elements/Divider/Divider";
import { pieData } from "../../../utils/fakeData";

export default function ChartsSection() {
  return (
    <View centerH>
      {/* Pie */}
      <View marginB-24>
        <VictoryPie
          padding={0}
          height={200}
          colorScale={["#303030", "#505050", "blue"]}
          labels={() => null}
          data={pieData}
        />
      </View>

      {/* Padding */}
      <Divider size="big" />
    </View>
  );
}
