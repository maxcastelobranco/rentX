import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import { RectButton } from "react-native-gesture-handler";

import { CarData } from "../../../../../context/reducers/carParamsReducer";
import { Box, Text, Theme } from "../../../../../theme";
import Speedometer from "../../../../../components/svgs/static/Speedometer";
import Acceleration from "../../../../../components/svgs/static/Acceleration";
import Wheel from "../../../../../components/svgs/static/Wheel";
import Electric from "../../../../../components/svgs/static/engineTypes/Electric";
import Gas from "../../../../../components/svgs/static/engineTypes/Gas";
import Hybrid from "../../../../../components/svgs/static/engineTypes/Hybrid";
import Transmission from "../../../../../components/svgs/static/Transmission";
import { money } from "../../../../../utils/money";

import { useStyles } from "./styles";

interface CarSpecsProps {
  data: CarData;
}

const CarSpecs: React.FC<CarSpecsProps> = ({ data }) => {
  const theme = useTheme<Theme>();
  const {
    make,
    model,
    dailyRate,
    topSpeed,
    acceleration,
    horsePower,
    engineType,
    transmission,
    seating,
  } = data;

  const {
    containerStyles,
    headerStyles,
    labelStyles,
    contentStyles,
    specsContainerStyles,
    specStyles,
    specTextStyles,
  } = useStyles();

  const [speedMeasurement, setSpeedMeasurement] = useState<"kmh" | "mph">(
    "kmh"
  );
  const toggleSpeedMeasurement = () => {
    if (speedMeasurement === "kmh") {
      setSpeedMeasurement("mph");
    } else {
      setSpeedMeasurement("kmh");
    }
  };

  const engineTypeIcon =
    engineType === "electric" ? (
      <Electric fill={theme.colors.textDark1} />
    ) : engineType === "gas" ? (
      <Gas fill={theme.colors.textDark1} />
    ) : (
      <Hybrid fill={theme.colors.textDark1} />
    );

  return (
    <Box {...containerStyles}>
      <Box {...headerStyles}>
        <Box>
          <Text {...labelStyles}>{make}</Text>
          <Text {...contentStyles}>{model}</Text>
        </Box>
        <Box>
          <Text {...labelStyles}>Daily rate</Text>
          <Text {...contentStyles}>{money(dailyRate)}</Text>
        </Box>
      </Box>
      <Box {...specsContainerStyles}>
        <RectButton style={specStyles} onPress={toggleSpeedMeasurement}>
          <Speedometer />
          {speedMeasurement === "kmh" ? (
            <Text {...specTextStyles}>{topSpeed} km/h</Text>
          ) : (
            <Text {...specTextStyles}>
              {Math.round(topSpeed * 0.621371)} mph
            </Text>
          )}
        </RectButton>
        <Box style={specStyles}>
          <Acceleration />
          <Text {...specTextStyles}>{acceleration}s</Text>
        </Box>
        <Box style={specStyles}>
          <Wheel />
          <Text {...specTextStyles}>{horsePower} HP</Text>
        </Box>
        <Box style={specStyles}>
          {engineTypeIcon}
          <Text {...specTextStyles} textTransform="capitalize">
            {engineType}
          </Text>
        </Box>
        <Box style={specStyles}>
          <Transmission />
          <Text {...specTextStyles} textTransform="capitalize">
            {transmission}
          </Text>
        </Box>
        <Box style={specStyles}>
          <Feather name="user" size={32} color={theme.colors.textDark1} />
          <Text {...specTextStyles}>{seating} people</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CarSpecs;
