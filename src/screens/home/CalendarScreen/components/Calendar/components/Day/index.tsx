import React, { useCallback, useMemo } from "react";
import { Text, TextStyle, ViewStyle } from "react-native";
import { differenceInDays, format, isAfter, isBefore, isEqual } from "date-fns";
import { useTheme } from "@shopify/restyle";
import { RectButton } from "react-native-gesture-handler";

import { CalendarProps } from "../../index";
import { Theme } from "../../../../../../../theme";

import { useStyles } from "./styles";

interface DayProps extends Omit<CalendarProps, "anyPickerOpen"> {
  day: Date;
  currentDate: Date;
}

const Day: React.FC<DayProps> = ({
  day,
  currentDate,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) => {
  const theme = useTheme<Theme>();
  const { containerStyles, dayStyles } = useStyles();

  const formattedDay = useMemo(() => {
    return format(day, "d");
  }, [day]);
  const isStartDate = useMemo(() => {
    return isEqual(day, startDate);
  }, [day, startDate]);
  const isEndDate = useMemo(() => {
    return isEqual(day, endDate);
  }, [day, endDate]);
  const isWithinSchedule = useMemo(() => {
    return isAfter(day, startDate) && isBefore(day, endDate);
  }, [day, endDate, startDate]);
  const isCurrentMonth = useMemo(() => {
    return day.getMonth() === currentDate.getMonth();
  }, [currentDate, day]);

  const extraContainerStyles: ViewStyle = useMemo(
    () => ({
      backgroundColor:
        isStartDate || isEndDate
          ? theme.colors.primary
          : isWithinSchedule
          ? theme.colors.textLight3
          : theme.colors.backgroundLight1,
      opacity: isCurrentMonth ? 1 : 0.5,
    }),
    [
      isCurrentMonth,
      isEndDate,
      isStartDate,
      isWithinSchedule,
      theme.colors.backgroundLight1,
      theme.colors.primary,
      theme.colors.textLight3,
    ]
  );
  const extraDayStyles: TextStyle = useMemo(
    () => ({
      color:
        isStartDate || isEndDate
          ? theme.colors.backgroundLight1
          : isWithinSchedule
          ? theme.colors.primary
          : theme.colors.textDark1,
      fontWeight: isStartDate || isEndDate || isWithinSchedule ? "700" : "500",
    }),
    [
      isEndDate,
      isStartDate,
      isWithinSchedule,
      theme.colors.backgroundLight1,
      theme.colors.primary,
      theme.colors.textDark1,
    ]
  );

  const onPress = useCallback(() => {
    if (isBefore(day, startDate)) {
      setStartDate(day);
    } else if (isAfter(day, endDate)) {
      setEndDate(day);
    } else if (isWithinSchedule) {
      const distanceToStart = Math.abs(differenceInDays(day, startDate));
      const distanceToEnd = Math.abs(differenceInDays(day, endDate));

      if (distanceToStart > distanceToEnd) {
        setEndDate(day);
      } else {
        setStartDate(day);
      }
    }
  }, [day, endDate, isWithinSchedule, setEndDate, setStartDate, startDate]);

  return (
    <RectButton
      style={[containerStyles, extraContainerStyles]}
      {...{ onPress }}
    >
      <Text style={[dayStyles, extraDayStyles]}>{formattedDay}</Text>
    </RectButton>
  );
};

export default Day;
