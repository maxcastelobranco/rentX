import React from "react";
import { eachDayOfInterval } from "date-fns";
import { RectButton } from "react-native-gesture-handler";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import { Box, Text } from "../../../../../theme";
import { useAppContext } from "../../../../../context";
import { money } from "../../../../../utils/money";
import { HomeRoutes } from "../../../../../routes/home";
import { TabRoutes } from "../../../../../routes/tabs";

import { useStyles } from "./styles";

interface LeaseProps {
  make: string;
  model: string;
  dailyRate: number;
  navigation: CompositeNavigationProp<
    StackNavigationProp<HomeRoutes, "CarDetails">,
    BottomTabNavigationProp<TabRoutes, "Home">
  >;
}

const Lease: React.FC<LeaseProps> = ({
  dailyRate,
  make,
  model,
  navigation,
}) => {
  const {
    state: {
      timeInterval: { startDate: start, endDate: end },
    },
  } = useAppContext();

  const {
    containerStyles,
    labelStyles,
    totalContainerStyles,
    totalDescriptionStyles,
    totalStyles,
    buttonStyles,
    buttonTextStyles,
  } = useStyles();

  const numberOfDays = eachDayOfInterval({ start, end }).length;
  const total = numberOfDays * dailyRate;

  const onPress = () => {
    navigation.navigate("CarLeaseSuccessful", {
      makeAndModel: `${make}, ${model}`,
    });
  };

  return (
    <Box {...containerStyles}>
      <Box {...totalContainerStyles}>
        <Box>
          <Text {...labelStyles}>Total</Text>
          <Text {...totalDescriptionStyles}>{`${money(
            dailyRate
          )} x${numberOfDays} days`}</Text>
        </Box>
        <Text {...totalStyles}>{money(total)}</Text>
      </Box>
      <RectButton style={buttonStyles} {...{ onPress }}>
        <Text {...buttonTextStyles}>Lease now</Text>
      </RectButton>
    </Box>
  );
};

export default Lease;
