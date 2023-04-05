import moment from "moment";

import { DATE_FORMAT } from "@config/constants";
import i18n from "@i18n";

export const getTimeRangeGreetings = () => {
  const hour = moment().hour();

  if (hour > 18) {
    return i18n.t("home.greetings.evening");
  }

  if (hour > 12) {
    return i18n.t("home.greetings.afternoon");
  }

  return i18n.t("home.greetings.morning");
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
