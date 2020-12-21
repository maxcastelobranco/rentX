import React, { useState } from "react";
import { useSharedValue } from "react-native-reanimated";
import { add } from "date-fns";

import { Box, Text } from "../../../theme";
import { HomeNavigationProps } from "../../../routes/home";
import LongArrow from "../../../components/svgs/static/LongArrow";

import { useStyles } from "./styles";
import DatePicker from "./components/DatePicker";

const CalendarScreen: React.FC<HomeNavigationProps<"CalendarScreen">> = () => {
  const {
    containerStyles,
    titleStyles,
    datePickerContainerStyles,
  } = useStyles();

  const startDatePickerOpen = useSharedValue(false);
  const endDatePickerOpen = useSharedValue(false);

  const today = new Date();
  const tomorrow = add(today, { days: 1 });
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow);

  return (
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
  );
};

export default CalendarScreen;
