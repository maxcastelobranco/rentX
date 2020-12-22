import React, { useMemo, useState } from "react";
import { add, eachWeekOfInterval, format, getDaysInMonth, sub } from "date-fns";
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";

import { Box, Text, Theme } from "../../../../../theme";
import responsivePixelSize from "../../../../../utils/responsivePixelSize";
import { weekdays } from "../DatePicker/constants";

import { useStyles } from "./styles";

interface CalendarProps {
  startDate: Date;
  endDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
  anyPickerOpen: Animated.SharedValue<boolean>;
}

const ICON_SIZE = responsivePixelSize(24);

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
}) => {
  const theme = useTheme<Theme>();
  const {
    containerStyles,
    headerStyles,
    currentMonthStyles,
    chevronsContainerStyles,
    chevronStyles,
  } = useStyles();
  const [currentDate, setCurrentDate] = useState(startDate);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      flex: withTiming(anyPickerOpen.value ? 0.1 : 2, timingConfig),
    };
  });

  const formattedCurrentMonth = useMemo(() => format(currentDate, "MMMM, y"), [
    currentDate,
  ]);
  const addOneMonth = () => {
    setCurrentDate((prevState) => add(prevState, { months: 1 }));
  };
  const subtractOneMonth = () => {
    setCurrentDate((prevState) => sub(prevState, { months: 1 }));
  };

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

  console.log(everyDayOfCurrentMonth);

  return (
    <Animated.View style={[containerStyles, animatedStyle]}>
      <Box {...headerStyles}>
        <Text {...currentMonthStyles}>{formattedCurrentMonth}</Text>
        <Box {...chevronsContainerStyles}>
          <RectButton style={chevronStyles} onPress={subtractOneMonth}>
            <Feather
              name="chevron-left"
              size={ICON_SIZE}
              color={theme.colors.textDark2}
            />
          </RectButton>
          <RectButton style={chevronStyles} onPress={addOneMonth}>
            <Feather
              name="chevron-right"
              size={ICON_SIZE}
              color={theme.colors.textDark2}
            />
          </RectButton>
        </Box>
      </Box>
    </Animated.View>
  );
};

export default Calendar;
