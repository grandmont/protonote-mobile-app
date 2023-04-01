import { DateData } from "react-native-calendars";
import { DayProps } from "react-native-calendars/src/calendar/day";
import { View, Button, Text, Colors } from "react-native-ui-lib";

interface CalendarDayProps {
  date?: DateData;
  marking?: {
    hasMemo?: boolean;
  };
  onPress: (date: DateData) => void;
  onLongPress: (date: DateData) => void;
}

export default function CalendarDay(props: DayProps & CalendarDayProps) {
  const { state, marking, date, onPress, onLongPress } = props;

  const isToday = state === "today";
  const isMarked = marking?.hasMemo;
  const isDisabled = state === "disabled";

  const todayStyle = isToday && {
    container: {},
    text: {
      color: Colors.link,
      fontWeight: "bold",
    },
  };

  const markedStyle = !isToday &&
    isMarked && {
      container: {
        borderBottomWidth: 4,
        borderColor: Colors.link,
      },
      text: {},
    };

  const disabledStyle = isDisabled && {
    container: {},
    text: {
      color: "grey",
    },
  };

  const handleDayPress = () => {
    onPress && onPress(date);
  };

  const handleDayLongPress = () => {
    onLongPress && onLongPress(date);
  };

  return (
    <>
      <View pointerEvents={isDisabled ? "none" : "auto"}>
        <Button
          link
          onPress={handleDayPress}
          onLongPress={handleDayLongPress}
          hitSlop={4}
          style={{
            width: 30,
            height: 30,
            alignItems: "center",
            justifyContent: "center",

            ...todayStyle?.container,
            ...markedStyle?.container,
            ...disabledStyle?.container,
          }}
        >
          <Text
            style={{
              ...todayStyle?.text,
              ...disabledStyle?.text,
            }}
          >
            {date.day}
          </Text>
        </Button>
      </View>
    </>
  );
}
