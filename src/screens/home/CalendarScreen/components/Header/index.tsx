import React from "react";
import Animated from "react-native-reanimated";

import { Box, Text } from "../../../../../theme";
import DatePicker from "../DatePicker";
import LongArrow from "../../../../../components/svgs/static/LongArrow";

import { useStyles } from "./styles";

interface HeaderProps {
  startDatePickerOpen: Animated.SharedValue<boolean>;
  endDatePickerOpen: Animated.SharedValue<boolean>;
  startDate: Date;
  endDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
  showTitle?: boolean;
  compact?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  startDatePickerOpen,
  endDatePickerOpen,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  showTitle,
  compact,
}) => {
  const {
    containerStyles,
    titleStyles,
    datePickerContainerStyles,
  } = useStyles();

  return (
    <Box {...containerStyles} padding={compact ? "s" : "l"}>
      {showTitle && <Text {...titleStyles}>Pick a date and find a ride.</Text>}
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

export default Header;
