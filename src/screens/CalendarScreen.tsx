import { useState } from "react";
import {
  Colors,
  Text,
  LoaderScreen,
  Incubator,
  View,
  Card,
} from "react-native-ui-lib";
import { CalendarList } from "react-native-calendars";
import type { MarkedDates, DateData } from "react-native-calendars/src/types";
import { useLazyQuery, useQuery } from "@apollo/client";
const { Dialog } = Incubator;

import {
  GetMemoByDateStringDocument,
  Proto,
  ProtosQueryDocument,
} from "../graphql/generated";
import useAuth from "../hooks/useAuth";
import { getTodayDateString } from "../utils/parsers";
import Fade from "../components/elements/Fade/Fade";
import CalendarDay from "../components/calendar/CalendarDay/CalendarDay";

export default function CalendarScreen({ navigation }) {
  const { userInfo } = useAuth();

  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [dialogData, setDialogData] = useState<Proto | null>(null);

  const todayDateString = getTodayDateString();

  const initialCalendarDates = {
    [todayDateString]: {
      customStyles: {
        text: {
          color: Colors.primary,
          fontWeight: "600",
        },
      },
    },
  };

  const [getMemoByDate] = useLazyQuery(GetMemoByDateStringDocument);

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
      hasMemo: true,
    };

    return {
      ...acc,
      [dateString]: calendarOptions,
    };
  }, initialCalendarDates);

  const handleDayPress = (date: DateData) => {
    navigation.navigate("Memo", { date });
  };

  const handleLongPress = async ({ dateString }: DateData) => {
    setIsDialogVisible(true);

    const data = await getMemoByDate({
      variables: {
        dateString,
      },
    });

    setDialogData(data.data.getMemoByDateString as Proto);
  };

  if (loading) return <LoaderScreen overlay />;

  return (
    <>
      <View bg-white>
        <View marginT-48 paddingB-48>
          <CalendarList
            onDayPress={handleDayPress}
            onDayLongPress={handleLongPress}
            maxDate={todayDateString}
            pastScrollRange={12}
            futureScrollRange={0}
            markingType="custom"
            markedDates={markedDates as MarkedDates}
            calendarHeight={380}
            dayComponent={(props) => (
              <CalendarDay
                {...props}
                onPress={handleDayPress}
                onLongPress={handleLongPress}
              />
            )}
            theme={{
              textMonthFontWeight: "600",
            }}
          />
          <Fade bottom />
        </View>
      </View>
      <Dialog
        visible={isDialogVisible}
        onDismiss={() => setIsDialogVisible(false)}
        containerStyle={{
          top: "40%",
          width: "70%",
        }}
      >
        <Card padding-16 center>
          {dialogData ? (
            <>
              <Text title>{dialogData.title}</Text>
              <Text marginV-12 numberOfLines={7}>
                {dialogData.description}
              </Text>
            </>
          ) : (
            <LoaderScreen />
          )}
        </Card>
      </Dialog>
    </>
  );
}
