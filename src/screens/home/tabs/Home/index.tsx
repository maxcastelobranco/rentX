import React from "react";
import { useSharedValue } from "react-native-reanimated";

import { Box } from "../../../../theme";
import { TabNavigationProps } from "../../../../routes/tabs";
import Header from "../../CalendarScreen/components/Header";
import { useCalendarBoilerplate } from "../../CalendarScreen/components/Calendar/hooks/useCalendarBoilerplate";
import { useAppContext } from "../../../../context";
import { usePreventGoingBack } from "../hooks/usePreventGoingBack";

import { useStyles } from "./styles";
import Filter from "./components/Filter";
import Results from "./components/Results";
import Overlay from "./components/Overlay";
import { useFilterBoilerplate } from "./hooks/useFilterBoilerplate";

const Home: React.FC<TabNavigationProps<"Home">> = ({ navigation }) => {
  const {
    state: { timeInterval },
  } = useAppContext();
  const { containerStyles } = useStyles();
  usePreventGoingBack("CalendarScreen", navigation);
  const {
    startDatePickerOpen,
    endDatePickerOpen,
    anyPickerOpen,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  } = useCalendarBoilerplate(timeInterval.startDate, timeInterval.endDate);
  const {
    dailyRate,
    setDailyRate,
    engineType,
    setEngineType,
    transmission,
    setTransmission,
  } = useFilterBoilerplate();

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
      <Filter
        open={filterOpen}
        {...{ dailyRate, setDailyRate, engineType, setEngineType, transmission, setTransmission }}
      />
      <Overlay open={filterOpen} />
    </Box>
  );
};

export default Home;
