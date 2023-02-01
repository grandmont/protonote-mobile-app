import moment from "moment";
import { DATE_FORMAT } from "../config/constants";

export const getTimeRangeGreetings = () => {
  const hour = moment().hour();

  if (hour > 18) {
    return "evening";
  }

  if (hour > 12) {
    return "afternoon";
  }

  return "morning";
};

export const formatDateToDateString = (date: Date | string | number) => {
  return moment(date).format(DATE_FORMAT);
};

export const getTodayDateString = () => {
  return formatDateToDateString(Date.now());
};

export const getWrittenDateString = (dateString?: string) => {
  return moment(dateString).format("MMMM Do, Y");
};
