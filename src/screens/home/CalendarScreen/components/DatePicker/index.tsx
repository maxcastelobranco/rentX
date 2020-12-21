import React, { useEffect, useMemo, useState } from "react";
import { format } from "date-fns";
import { RectButton } from "react-native-gesture-handler";
import Animated, {
  Easing,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { Box, Text } from "../../../../../theme";
import Button from "../../../../../components/animated/Button";

import { useStyles } from "./styles";
import Slider from "./components/Slider";
import data from "./constants";

interface DatePickerProps {
  label: string;
  selfOpen: Animated.SharedValue<boolean>;
  otherOpen: Animated.SharedValue<boolean>;
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

const timingConfig: Animated.WithTimingConfig = {
  duration: 250,
  easing: Easing.bezier(0.87, 0, 0.13, 1),
};

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  selfOpen,
  otherOpen,
  date,
  setDate,
}) => {
  const {
    containerStyles,
    labelStyles,
    dateStyles,
    underlineStyles,
    sliderContainerStyles,
    extraContainerStyles,
    extraButtonStyles,
  } = useStyles();

  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());

  const { days, months, years } = data;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(selfOpen.value ? 1 : 0, timingConfig),
      transform: [
        { scale: withSpring(selfOpen.value ? 1 : 0) },
        { translateY: withSpring(selfOpen.value ? 200 : -50) },
      ],
    };
  });
  const toggleDatePicker = () => {
    if (otherOpen.value) {
      otherOpen.value = false;
    }
    selfOpen.value = !selfOpen.value;
  };
  const closeDatePicker = () => {
    selfOpen.value = false;
  };

  useEffect(() => {
    setDate(new Date(year, month, day));
  }, [day, month, setDate, year]);
  const formattedDate = useMemo(() => format(date, "LLL do, yyy"), [date]);

  return (
    <>
      <RectButton style={containerStyles} onPress={toggleDatePicker}>
        <Text {...labelStyles}>{label}</Text>
        <Text {...dateStyles}>{formattedDate}</Text>
        <Box {...underlineStyles} />
      </RectButton>
      <Animated.View style={[sliderContainerStyles, animatedStyle]}>
        <Box flexDirection="row">
          <Slider options={days} value={day} setValue={setDay} />
          <Slider options={months} value={month} setValue={setMonth} />
          <Slider options={years} value={year} setValue={setYear} />
        </Box>
        <Button
          enabled
          label="Done"
          onPress={closeDatePicker}
          {...{ extraButtonStyles, extraContainerStyles }}
        />
      </Animated.View>
    </>
  );
};

export default DatePicker;
