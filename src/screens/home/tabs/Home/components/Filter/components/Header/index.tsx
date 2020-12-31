import React from "react";
import { RectButton } from "react-native-gesture-handler";

import { Box, Text } from "../../../../../../../../theme";

import { useStyles } from "./styles";

interface HeaderProps {
  onPress(): void;
}

const Header: React.FC<HeaderProps> = ({ onPress }) => {
  const {
    closeFilterButtonStyles,
    closeFilterStyles,
    filterTextContainerStyles,
    filterTextStyles,
  } = useStyles();

  return (
    <>
      <RectButton {...{ onPress }} style={closeFilterButtonStyles}>
        <Box {...closeFilterStyles} />
      </RectButton>
      <Box {...filterTextContainerStyles}>
        <Text {...filterTextStyles}>Filter</Text>
      </Box>
    </>
  );
};

export default Header;
