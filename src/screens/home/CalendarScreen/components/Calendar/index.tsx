import React, { useMemo, useState } from "react";
import {
  add,
  eachWeekOfInterval,
  format,
  getDaysInMonth,
  isAfter,
  sub,
} from "date-fns";
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useTheme } from "@shopify/restyle";

import { Box, Theme } from "../../../../../theme";
import Button from "../../../../../components/animated/Button";
import { HomeNavigationProp } from "../../../../../routes/home";
import { useAppContext } from "../../../../../context";
import { TimeIntervalActionTypes } from "../../../../../context/reducers/timeIntervalReducer";

import { useStyles } from "./styles";
import Day from "./components/Day";
import CurrentMonth from "./components/CurrentMonth";
import Weekdays from "./components/Weekdays";

export interface CalendarProps {
  startDate: Date;
  endDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
  anyPickerOpen: Animated.SharedValue<boolean>;
  navigation: HomeNavigationProp<"CalendarScreen">;
}

const timingConfig: Animated.WithTimingConfig = {
  duration: 500,
  easing: Easing.bezier(0.22, 1, 0.36, 1),
};

const Calendar: React.FC<CalendarProps> = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  anyPickerOpen,
  navigation,
}) => {
  const { dispatch } = useAppContext();
  const theme = useTheme<Theme>();
  const { containerStyles, rowStyles } = useStyles();

  const [currentDate, setCurrentDate] = useState(startDate);

  const formattedCurrentMonth = useMemo(() => format(currentDate, "MMMM, y"), [
    currentDate,
  ]);
  const everyDayOfCurrentMonth = useMemo(() => {
    const everyDay: Date[][] = [];

    const start = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const end = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      getDaysInMonth(currentDate)
    );

    const firstDays = eachWeekOfInterval({ start, end });

    firstDays.forEach((sunday) => {
      const daysOfTheWeek: Date[] = [sunday];

      for (let days = 1; days < 7; days++) {
        daysOfTheWeek.push(add(sunday, { days }));
      }

      everyDay.push(daysOfTheWeek);
    });

    return everyDay;
  }, [currentDate]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      flex: withTiming(anyPickerOpen.value ? 0.1 : 2.5, timingConfig),
    };
  });

  const addOneMonth = () => {
    setCurrentDate((prevState) => add(prevState, { months: 1 }));
  };
  const subtractOneMonth = () => {
    setCurrentDate((prevState) => sub(prevState, { months: 1 }));
  };
  const onPress = () => {
    dispatch({
      type: TimeIntervalActionTypes.Update,
      payload: {
        startDate,
        endDate,
      },
    });
    navigation.navigate("Tabs");
  };

  return (
    <Animated.View style={[containerStyles, animatedStyle]}>
      <CurrentMonth
        {...{ addOneMonth, subtractOneMonth, formattedCurrentMonth }}
      />
      <Weekdays />
      {everyDayOfCurrentMonth.map((week, weekIndex) => {
        return (
          <Box key={weekIndex} {...rowStyles}>
            {week.map((day, dayIndex) => {
              return (
                <Day
                  key={`${weekIndex}-${dayIndex}`}
                  {...{
                    day,
                    currentDate,
                    startDate,
                    endDate,
                    setStartDate,
                    setEndDate,
                  }}
                />
              );
            })}
          </Box>
        );
      })}
      <Button
        enabled={isAfter(endDate, startDate)}
        label="Done"
        extraContainerStyles={{ marginTop: theme.spacing.m }}
        {...{ onPress }}
      />
    </Animated.View>
  );
};

export default Calendar;
