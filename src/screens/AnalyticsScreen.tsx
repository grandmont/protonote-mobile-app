import { ScrollView } from "react-native";
import { View, Text } from "react-native-ui-lib";
import {
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryPie,
  VictoryTheme,
} from "victory-native";
import Divider from "../components/elements/Divider/Divider";
import Fade from "../components/elements/Fade/Fade";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
  { quarter: 5, earnings: 18000 },
];

import ScreenLayout from "../components/layout/ScreenLayout";

export default function AnalyticsScreen() {
  return (
    <ScreenLayout divider={false}>
      <Text h2>Usage report</Text>
      <Text p marginB-12>
        Find information about your memos
      </Text>
      <ScrollView>
        <View centerH>
          <VictoryChart width={350} height={300} theme={VictoryTheme.material}>
            <VictoryBar data={data} x="quarter" y="earnings" />
          </VictoryChart>

          <VictoryPie
            height={300}
            data={[
              { x: "Cats", y: 35 },
              { x: "Dogs", y: 40 },
              { x: "Birds", y: 55 },
            ]}
          />

          <VictoryChart width={350} height={300} theme={VictoryTheme.material}>
            <VictoryLine
              style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc" },
              }}
              data={[
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 7 },
              ]}
            />
          </VictoryChart>
          <Divider size="big" />
        </View>
      </ScrollView>
      <Fade bottom />
    </ScreenLayout>
  );
}
