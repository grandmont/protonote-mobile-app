import { useCallback, useEffect, useState } from "react";
import { Colors, LoaderScreen, Incubator, View } from "react-native-ui-lib";
import { CalendarList } from "react-native-calendars";
import { useFocusEffect } from "@react-navigation/native";
const { Dialog } = Incubator;
import type { MarkedDates, DateData } from "react-native-calendars/src/types";

import useLocalQuery from "@hooks/useLocalQuery";
import CalendarDay from "@components/calendar/CalendarDay/CalendarDay";
import DialogCard from "@components/elements/DialogCard/DialogCard";
import Fade from "@components/elements/Fade/Fade";
import { getTodayDateString } from "@utils/parsers";
import type { Proto } from "@graphql/generated";

export default function CalendarScreen({ navigation }) {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
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

  const { data, loading, refetch } = useLocalQuery("proto");

  const memos = data ? data : [];

  const markedDates = memos.reduce((acc, { dateString }) => {
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

  const handleLongPress = async (date: DateData) => {
    const memo = data.find(({ dateString }) => dateString === date.dateString);

    if (!memo) {
      navigation.navigate("Memo", { date });
    }

    setIsDialogVisible(true);
    setDialogData(memo as unknown as Proto);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCalendarVisible(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Need to move this to reuse the logic
  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [])
  );

  return (
    <>
      <View bg-white>
        <View
          marginT-48
          paddingB-48
          style={{
            opacity: isCalendarVisible ? 1 : 0,
          }}
        >
          <CalendarList
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

        {(loading || !isCalendarVisible) && <LoaderScreen overlay />}
      </View>

      <Dialog
        visible={isDialogVisible}
        onDismiss={() => setIsDialogVisible(false)}
        containerStyle={{
          top: "40%",
          width: "80%",
        }}
      >
        {dialogData && (
          <DialogCard
            title={dialogData.title}
            description={dialogData.description}
          />
        )}
      </Dialog>
    </>
  );
}
