import { useEffect, useState } from "react";
import { CalendarList, DateData } from "react-native-calendars";
import moment from "moment";
import { View } from "react-native-ui-lib";
import { useQuery } from "@apollo/client";

import { DATE_FORMAT } from "../config/constants";
import { ProtosQueryDocument } from "../graphql/generated";

export default function CalendarScreen({ navigation }) {
  const today = moment(Date.now()).format(DATE_FORMAT);

  const initialCalendarDates = {
    [today]: {
      customStyles: {
        text: {
          color: "blue",
          fontWeight: "600" as any,
        },
      },
    },
  };

  const [markedDates, setMarkedDates] = useState(initialCalendarDates);

  const { data } = useQuery(ProtosQueryDocument, {
    variables: {
      where: {
        userId: {
          // Should put the current userId here
          equals: 1,
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
        title: cur.title,
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

  return (
    <View useSafeArea bg-white>
      <CalendarList
        onDayPress={handleDayPress}
        maxDate={today}
        pastScrollRange={12}
        futureScrollRange={0}
        markingType="custom"
        markedDates={markedDates}
        theme={{
          textMonthFontWeight: "600",
        }}
      />
    </View>
  );
}
