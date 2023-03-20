import { useState } from "react";
import { Colors, LoaderScreen, Incubator, View } from "react-native-ui-lib";
import { CalendarList } from "react-native-calendars";
import type { MarkedDates, DateData } from "react-native-calendars/src/types";
import { useQuery } from "@apollo/client";
const { Dialog } = Incubator;

import useAuth from "@hooks/useAuth";
import Fade from "@components/elements/Fade/Fade";
import CalendarDay from "@components/calendar/CalendarDay/CalendarDay";
import DialogCard from "@components/elements/DialogCard/DialogCard";
import { Proto, ProtosDocument } from "@graphql/generated";
import { getTodayDateString } from "@utils/parsers";

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

  const { data, loading } = useQuery(ProtosDocument, {
    variables: {
      where: {
        userId: {
          equals: userInfo?.id,
        },
      },
    },
  });

  const memos = data ? data.protos : [];

  // Reduce array into an object with dates as key
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
    const memo = data.protos.find(
      ({ dateString }) => dateString === date.dateString
    );

    if (!memo) return;

    setIsDialogVisible(true);
    setDialogData(memo as Proto);
  };

  if (loading) return <LoaderScreen overlay />;

  return (
    <>
      <View bg-white>
        <View marginT-48 paddingB-48>
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
