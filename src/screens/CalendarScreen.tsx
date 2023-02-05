import { CalendarList, DateData } from "react-native-calendars";
import { LoaderScreen, View } from "react-native-ui-lib";
import { useQuery } from "@apollo/client";

import { ProtosQueryDocument } from "../graphql/generated";
import useAuth from "../hooks/useAuth";
import { getTodayDateString } from "../utils/parsers";
import Fade from "../components/elements/Fade/Fade";
import { MarkedDates } from "react-native-calendars/src/types";

export default function CalendarScreen({ navigation }) {
  const { userInfo } = useAuth();

  const todayDateString = getTodayDateString();

  const initialCalendarDates = {
    [todayDateString]: {
      customStyles: {
        text: {
          color: "blue",
          fontWeight: "600",
        },
      },
    },
  };

  const { data, loading } = useQuery(ProtosQueryDocument, {
    variables: {
      where: {
        userId: {
          equals: userInfo?.id,
        },
      },
    },
  });

  // Reduce array into an object with dates as key
  const markedDates = data.protos.reduce((acc, { dateString }) => {
    const calendarOptions = {
      customStyles: {
        container: {
          backgroundColor: "blue",
          borderRadius: "100%",
        },
        text: {
          color: "white",
        },
      },
    };

    return {
      ...acc,
      [dateString]: calendarOptions,
    };
  }, initialCalendarDates);

  const handleDayPress = (date: DateData) => {
    navigation.navigate("Memo", { date });
  };

  if (loading) return <LoaderScreen overlay />;

  return (
    <View bg-white>
      <View marginT-48 paddingB-48>
        <CalendarList
          onDayPress={handleDayPress}
          maxDate={todayDateString}
          pastScrollRange={12}
          futureScrollRange={0}
          markingType="custom"
          markedDates={markedDates as MarkedDates}
          calendarHeight={380}
          // dayComponent={() => <View />}
          theme={{
            textMonthFontWeight: "600",
          }}
        />
        <Fade bottom />
      </View>
    </View>
  );
}
