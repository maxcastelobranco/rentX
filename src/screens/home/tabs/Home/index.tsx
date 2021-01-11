import React, { useState } from "react";
import { useSharedValue } from "react-native-reanimated";

import { Box } from "../../../../theme";
import { TabNavigationProps } from "../../../../routes/tabs";
import { usePreventGoingBack } from "../../../../hooks/usePreventGoingBack";
import Overlay from "../components/Overlay";

import Filter from "./components/Filter";
import Results from "./components/Results";
import { INCREMENT } from "./components/Results/constants";

const Home: React.FC<TabNavigationProps<"Home">> = ({ navigation }) => {
  usePreventGoingBack("CalendarScreen", navigation);

  const filterOpen = useSharedValue(false);
  const [end, setEnd] = useState(INCREMENT);

  return (
    <Box flex={1}>
      <Results {...{ filterOpen, end, setEnd }} />
      <Filter open={filterOpen} {...{ setEnd }} />
      <Overlay open={filterOpen} />
    </Box>
  );
};

export default Home;
