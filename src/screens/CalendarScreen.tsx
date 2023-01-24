import { CalendarList } from "react-native-calendars";
import { View } from "react-native-ui-lib";

export default function CalendarScreen() {
  const handleDayPress = (day) => {
    console.log(day);
  };

  const markedDates = {
    "2023-01-15": { marked: true, dotColor: "#50cebb" },
    "2023-01-16": { marked: true, dotColor: "#50cebb" },
    "2023-01-21": { startingDay: true, color: "#50cebb", textColor: "white" },
    "2023-01-22": { color: "#70d7c7", textColor: "white" },
    "2023-01-23": {
      color: "#70d7c7",
      textColor: "white",
      marked: true,
      dotColor: "white",
    },
    "2023-01-24": { color: "#70d7c7", textColor: "white" },
    "2023-01-25": { endingDay: true, color: "#50cebb", textColor: "white" },
  };

  return (
    <View useSafeArea bg-white>
      <CalendarList
        onDayPress={handleDayPress}
        futureScrollRange={0}
        markingType="period"
        markedDates={markedDates}
        disableAllTouchEventsForDisabledDays
        theme={{
          //   backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          // textSectionTitleColor: "#b6c1cd",
          //   textSectionTitleDisabledColor: "#d9e1e8",
          //   selectedDayBackgroundColor: "#00adf5",
          //   selectedDayTextColor: "#ffffff",
          //   todayTextColor: "#00adf5",
          //   dayTextColor: "#2d4150",
          //   textDisabledColor: "#d9e1e8",
          //   dotColor: "#00adf5",
          //   selectedDotColor: "#ffffff",
          //   arrowColor: "orange",
          //   disabledArrowColor: "#d9e1e8",
          //   monthTextColor: "blue",
          //   indicatorColor: "blue",
          //   textDayFontFamily: "monospace",
          //   textMonthFontFamily: "monospace",
          //   textDayHeaderFontFamily: "monospace",
          //   textDayFontWeight: "300",
          //   textMonthFontWeight: "bold",
          //   textDayHeaderFontWeight: "300",
          //   textDayFontSize: 16,
          //   textMonthFontSize: 16,
          //   textDayHeaderFontSize: 16,
        }}
      />
    </View>
  );
}
