import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";

import { Box, Text } from "../../../../../../../../theme";
import responsivePixelSize from "../../../../../../../../utils/responsivePixelSize";

import { useStyles } from "./styles";

interface HeaderProps {
  onPress(): void;
  totalCars: number;
}
const ICON_SIZE = responsivePixelSize(24);

const Header: React.FC<HeaderProps> = ({ onPress, totalCars }) => {
  const {
    containerStyles,
    titleStyles,
    toggleFilterStyles,
    resultsCountStyles,
    buttonStyles,
  } = useStyles();

  return (
    <Box {...containerStyles}>
      <Text {...titleStyles}>Results</Text>
      <Box {...toggleFilterStyles}>
        <Text {...resultsCountStyles}>{totalCars} cars</Text>
        <RectButton style={buttonStyles} {...{ onPress }}>
          <FontAwesome5 name="sliders-h" size={ICON_SIZE} />
        </RectButton>
      </Box>
    </Box>
  );
};

export default Header;
