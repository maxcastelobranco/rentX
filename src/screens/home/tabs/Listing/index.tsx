import React from "react";

import { Box } from "../../../../theme";
import { TabNavigationProps } from "../../../../routes/tabs";

const Listing: React.FC<TabNavigationProps<"Listing">> = () => {
  return <Box flex={1} backgroundColor="primary" />;
};

export default Listing;
