import { useEffect, useState } from "react";
import { CalendarList, DateData } from "react-native-calendars";
import moment from "moment";
import { LoaderScreen, View } from "react-native-ui-lib";
import { useQuery } from "@apollo/client";

import { DATE_FORMAT } from "../config/constants";
import { ProtosQueryDocument } from "../graphql/generated";
import useAuth from "../hooks/useAuth";
import { getTodayDateString } from "../utils/parsers";
import Fade from "../components/elements/Fade/Fade";

export default function CalendarScreen({ navigation }) {
  const todayDateString = getTodayDateString();

  const initialCalendarDates = {
    [todayDateString]: {
      customStyles: {
        text: {
          color: "blue",
          fontWeight: "600" as any,
        },
      },
    },
  };

  const { userInfo } = useAuth();

  const [markedDates, setMarkedDates] = useState(initialCalendarDates);

  const { data, loading } = useQuery(ProtosQueryDocument, {
    variables: {
      where: {
        userId: {
          equals: userInfo?.id,
        },
      },
    },
  });

  useEffect(() => {
    if (!data) return;

    const { protos } = data;

    // Reduce array into an object with dates as key
    const newProtos = protos.reduce((acc, cur) => {
      const date = moment(cur.createdAt).format(DATE_FORMAT);

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
        [date]: calendarOptions,
      };
    }, {});

    setMarkedDates((prevMarkedDates) => ({ ...prevMarkedDates, ...newProtos }));
  }, [data]);

  const handleDayPress = (date: DateData) => {
    navigation.navigate("Memo", { date });
  };

  if (loading) {
    return <LoaderScreen overlay />;
  }

  return (
    <View useSafeArea bg-white>
      <CalendarList
        onDayPress={handleDayPress}
        maxDate={todayDateString}
        pastScrollRange={12}
        futureScrollRange={0}
        markingType="custom"
        markedDates={markedDates}
        theme={{
          textMonthFontWeight: "600",
        }}
      />
      <Fade />
    </View>
  );
}
