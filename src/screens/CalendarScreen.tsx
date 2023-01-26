import { CalendarList } from "react-native-calendars";
import { View } from "react-native-ui-lib";

export default function CalendarScreen({ navigation }) {
  const handleDayPress = (day) => {
    console.log(day);
    navigation.navigate("Memo", { date: day });
  };

  const handleVisibleMonthsChange = (months) => {
    console.log(months);
  };

  const markedDates = {
    "2023-01-15": { startingDay: true, color: "blue", textColor: "white" },
    "2023-01-16": { endingDay: true, color: "blue", textColor: "white" },
    "2023-01-21": { startingDay: true, color: "blue", textColor: "white" },
    "2023-01-22": { color: "blue", textColor: "white" },
    "2023-01-23": { color: "blue", textColor: "white" },
    "2023-01-24": { color: "blue", textColor: "white" },
    "2023-01-25": { endingDay: true, color: "blue", textColor: "white" },
    "2023-01-27": { disabled: true },
    "2023-01-28": { disabled: true },
    "2023-01-29": { disabled: true },
    "2023-01-30": { disabled: true },
    "2023-01-31": { disabled: true },
  };

  return (
    <View useSafeArea bg-white>
      <CalendarList
        onDayPress={handleDayPress}
        // onMonthChange={handleMonthChange}
        onVisibleMonthsChange={handleVisibleMonthsChange}
        pastScrollRange={12}
        futureScrollRange={0}
        markingType="period"
        markedDates={markedDates}
        disableAllTouchEventsForDisabledDays
        theme={{
          //   textSectionTitleDisabledColor: "#d9e1e8",
          //   selectedDayBackgroundColor: "#00adf5",
          //   selectedDayTextColor: "#ffffff",
          //   todayTextColor: "#00adf5",
          //   dayTextColor: "#2d4150",
          //   textDisabledColor: "#d9e1e8",
          dotColor: "blue",
          //   selectedDotColor: "#ffffff",
          //   arrowColor: "orange",
          //   disabledArrowColor: "#d9e1e8",
          // monthTextColor: "blue",
          // textDayFontFamily: "System",
          // textMonthFontFamily: "System",
          // textDayHeaderFontFamily: "System",
          textMonthFontWeight: "600",
          //   textDayFontSize: 16,
          //   textMonthFontSize: 16,
          //   textDayHeaderFontSize: 16,
        }}
      />
    </View>
  );
}
