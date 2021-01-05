import React, { useState } from "react";
import { useSharedValue } from "react-native-reanimated";

import { Box } from "../../../../theme";
import { TabNavigationProps } from "../../../../routes/tabs";
import Header from "../../CalendarScreen/components/Header";
import { useCalendarBoilerplate } from "../../CalendarScreen/components/Calendar/hooks/useCalendarBoilerplate";
import { useAppContext } from "../../../../context";
import { usePreventGoingBack } from "../../../../hooks/usePreventGoingBack";
import Overlay from "../components/Overlay";

import { useStyles } from "./styles";
import Filter from "./components/Filter";
import Results from "./components/Results";
import { INCREMENT } from "./components/Results/constants";

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

  const filterOpen = useSharedValue(false);
  const [end, setEnd] = useState(INCREMENT);

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
      <Results {...{ anyPickerOpen, filterOpen, end, setEnd }} />
      <Filter open={filterOpen} {...{ setEnd }} />
      <Overlay open={filterOpen} />
    </Box>
  );
};

export default Home;
