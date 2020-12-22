import React, { useState } from "react";
import { useDerivedValue, useSharedValue } from "react-native-reanimated";
import { add } from "date-fns";

import { HomeNavigationProps } from "../../../routes/home";

import Calendar from "./components/Calendar";
import Header from "./components/Header";

const CalendarScreen: React.FC<HomeNavigationProps<"CalendarScreen">> = () => {
  const startDatePickerOpen = useSharedValue(false);
  const endDatePickerOpen = useSharedValue(false);
  const anyPickerOpen = useDerivedValue(
    () => startDatePickerOpen.value || endDatePickerOpen.value
  );

  const today = new Date();
  const tomorrow = add(today, { days: 1 });
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow);

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
        }}
      />
    </>
  );
};

export default CalendarScreen;
