import React from "react";

import { HomeNavigationProps } from "../../../routes/home";

import Calendar from "./components/Calendar";
import Header from "./components/Header";
import { useCalendarBoilerplate } from "./components/Calendar/hooks/useCalendarBoilerplate";

const CalendarScreen: React.FC<HomeNavigationProps<"CalendarScreen">> = ({
  navigation,
}) => {
  const {
    startDatePickerOpen,
    endDatePickerOpen,
    anyPickerOpen,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  } = useCalendarBoilerplate();

  return (
    <>
      <Header
        {...{
          startDatePickerOpen,
          endDatePickerOpen,
          startDate,
          endDate,
          setStartDate,
          setEndDate,
        }}
      />
      <Calendar
        {...{
          startDate,
          endDate,
          setStartDate,
          setEndDate,
          anyPickerOpen,
          navigation,
        }}
      />
    </>
  );
};

export default CalendarScreen;
