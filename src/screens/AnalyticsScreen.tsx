import { ScrollView } from "react-native";
import { View } from "react-native-ui-lib";
import {
  VictoryAxis,
  VictoryBar,
  VictoryCandlestick,
  VictoryChart,
  VictoryLine,
  // VictoryPie,
  VictoryScatter,
  VictoryTheme,
  VictoryVoronoi,
} from "victory-native";

import Divider from "../components/elements/Divider/Divider";
import Fade from "../components/elements/Fade/Fade";
import Header from "../components/elements/Header/Header";
import ScreenLayout from "../components/layout/ScreenLayout";
import {
  barData,
  candleStickData,
  lineData,
  // pieData,
  scatterData,
  voronoiData,
} from "../utils/fakeData";

export default function AnalyticsScreen() {
  return (
    <ScreenLayout divider={false}>
      <Header
        title="Usage report"
        description="Find information about your memos"
      />

      <ScrollView>
        <View centerH>
          {/* Pie */}
          {/* <VictoryPie labels={() => null} data={pieData} /> */}

          {/* Bar */}
          <VictoryChart height={300} theme={VictoryTheme.material}>
            <VictoryBar
              data={barData}
              alignment="start"
              horizontal
              x="quarter"
              y="earnings"
            />
          </VictoryChart>

          {/* Line */}
          <VictoryChart height={300} theme={VictoryTheme.material}>
            <VictoryLine
              style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc" },
              }}
              data={lineData}
            />
          </VictoryChart>

          {/* Candlestick */}
          <VictoryChart
            height={300}
            theme={VictoryTheme.material}
            domainPadding={{ x: 25 }}
            // scale={{ x: "time" }}
          >
            <VictoryAxis tickFormat={(t) => t} />
            <VictoryAxis dependentAxis />
            <VictoryCandlestick
              candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
              data={candleStickData}
            />
          </VictoryChart>

          {/* Scatter */}
          <VictoryChart
            theme={VictoryTheme.material}
            domain={{ x: [0, 5], y: [0, 7] }}
          >
            <VictoryScatter
              style={{ data: { fill: "#c43a31" } }}
              size={7}
              data={scatterData}
            />
          </VictoryChart>

          {/* Voronoi */}
          <VictoryChart
            theme={VictoryTheme.material}
            domain={{ x: [0, 5], y: [0, 7] }}
          >
            <VictoryVoronoi
              style={{ data: { stroke: "#c43a31", strokeWidth: 2 } }}
              data={voronoiData}
            />
          </VictoryChart>

          {/* Padding */}
          <Divider size="big" />
        </View>
      </ScrollView>
      <Fade bottom />
    </ScreenLayout>
  );
}
