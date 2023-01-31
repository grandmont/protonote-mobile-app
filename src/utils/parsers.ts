import moment from "moment";
import { DATE_FORMAT } from "../config/constants";

export const getTimeRangeGreetings = () => {
  const hour = moment().hour();

  if (hour > 16) {
    return "evening";
  }

  if (hour > 11) {
    return "afternoon";
  }

  return "morning";
};

export const getTodayDateString = () => {
  return moment(Date.now()).format(DATE_FORMAT);
};
