import React from "react";
import { useSharedValue } from "react-native-reanimated";

import { Box } from "../../../../theme";
import { TabNavigationProps } from "../../../../routes/tabs";
import Header from "../../CalendarScreen/components/Header";
import { useCalendarBoilerplate } from "../../CalendarScreen/components/Calendar/hooks/useCalendarBoilerplate";
import { useAppContext } from "../../../../context";

import { useStyles } from "./styles";
import Filter from "./components/Filter";
import Results from "./components/Results";
import Overlay from "./components/Overlay";

const Home: React.FC<TabNavigationProps<"Home">> = () => {
  const {
    state: { timeInterval },
  } = useAppContext();
  const { containerStyles } = useStyles();
  const {
    startDatePickerOpen,
    endDatePickerOpen,
    anyPickerOpen,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  } = useCalendarBoilerplate(timeInterval.startDate, timeInterval.endDate);

  const filterOpen = useSharedValue(false);

  return (
    <Box {...containerStyles}>
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
      <Results {...{ anyPickerOpen, filterOpen }} />
      <Filter open={filterOpen} />
      <Overlay open={filterOpen} />
    </Box>
  );
};

export default Home;
