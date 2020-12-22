import React, { useState } from "react";
import { useDerivedValue, useSharedValue } from "react-native-reanimated";
import { add } from "date-fns";

import { Box, Text } from "../../../theme";
import { HomeNavigationProps } from "../../../routes/home";
import LongArrow from "../../../components/svgs/static/LongArrow";

import { useStyles } from "./styles";
import DatePicker from "./components/DatePicker";
import Calendar from "./components/Calendar";

const CalendarScreen: React.FC<HomeNavigationProps<"CalendarScreen">> = () => {
  const {
    containerStyles,
    titleStyles,
    datePickerContainerStyles,
  } = useStyles();

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
      <Box {...containerStyles}>
        <Text {...titleStyles}>Pick a date and find a ride.</Text>
        <Box {...datePickerContainerStyles}>
          <DatePicker
            label="from"
            selfOpen={startDatePickerOpen}
            otherOpen={endDatePickerOpen}
            date={startDate}
            setDate={setStartDate}
          />
          <LongArrow />
          <DatePicker
            label="to"
            selfOpen={endDatePickerOpen}
            otherOpen={startDatePickerOpen}
            date={endDate}
            setDate={setEndDate}
          />
        </Box>
      </Box>
      <Calendar
        {...{ startDate, endDate, setStartDate, setEndDate, anyPickerOpen }}
      />
    </>
  );
};

export default CalendarScreen;
