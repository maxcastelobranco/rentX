import React from "react";

import { Box } from "../../../../theme";
import { TabNavigationProps } from "../../../../routes/tabs";
import { usePreventGoingBack } from "../hooks/usePreventGoingBack";

const Listing: React.FC<TabNavigationProps<"Listing">> = ({ navigation }) => {
  usePreventGoingBack("CalendarScreen", navigation);

  return <Box flex={1} backgroundColor="primary" />;
};

export default Listing;
