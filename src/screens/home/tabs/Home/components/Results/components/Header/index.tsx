import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";

import { Box, Text } from "../../../../../../../../theme";
import responsivePixelSize from "../../../../../../../../utils/responsivePixelSize";
import { useAppContext } from "../../../../../../../../context";
import { useCars } from "../../../../../../../../hooks/useCars";
import Loading from "../../../../../../../../components/static/Loading";

import { useStyles } from "./styles";

interface HeaderProps {
  onPress(): void;
}
const ICON_SIZE = responsivePixelSize(24);

const Header: React.FC<HeaderProps> = ({ onPress }) => {
  const {
    state: { carParams },
  } = useAppContext();
  const { cars, error, isLoading } = useCars(carParams);

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
        {isLoading ? (
          <Loading color="primary" size="small" />
        ) : error ? (
          <Text {...resultsCountStyles}>{error}</Text>
        ) : (
          <Text {...resultsCountStyles}>{cars?.length} cars</Text>
        )}
        <RectButton style={buttonStyles} {...{ onPress }}>
          <FontAwesome5 name="sliders-h" size={ICON_SIZE} />
        </RectButton>
      </Box>
    </Box>
  );
};

export default Header;
