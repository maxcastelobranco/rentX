import React from "react";

import { Box } from "../../../../theme";
import { TabNavigationProps } from "../../../../routes/tabs";
import { usePreventGoingBack } from "../../../../hooks/usePreventGoingBack";

import Header from "./components/Header";
import Results from "./components/Results";

const Leases: React.FC<TabNavigationProps<"Leases">> = ({ navigation }) => {
  usePreventGoingBack("CalendarScreen", navigation);

  return (
    <Box flex={1}>
      <Header />
      <Results />
    </Box>
  );
};

export default Leases;
