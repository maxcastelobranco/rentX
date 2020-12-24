import React from "react";

import { Box } from "../../../../theme";
import { TabNavigationProps } from "../../../../routes/tabs";

const Home: React.FC<TabNavigationProps<"Home">> = () => {
  return <Box flex={1} backgroundColor="primary" />;
};

export default Home;
