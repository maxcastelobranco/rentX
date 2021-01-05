import React from "react";

import { Box, Text } from "../../../../../../theme";

import { useStyles } from "./styles";

const Header: React.FC = () => {
  const { containerStyles, titleStyles, numberOfCarsStyles } = useStyles();

  return (
    <Box {...containerStyles}>
      <Text {...titleStyles}>Listing</Text>
      <Text {...numberOfCarsStyles}>99 cars</Text>
    </Box>
  );
};

export default Header;
