import React, { useEffect } from "react";
import Animated, {
  runOnUI,
  useAnimatedRef,
  scrollTo,
} from "react-native-reanimated";
import { Dimensions } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";

import { Box, Theme } from "../../../theme";
import { HomeNavigationProps } from "../../../routes/home";
import { baseURL } from "../../../services/api";
import responsivePixelSize from "../../../utils/responsivePixelSize";

import CarImages from "./components/CarImages";
import { useStyles } from "./styles";
import CarSpecs from "./components/CarSpecs";
import TimeInterval from "./components/TimeInterval";
import Lease from "./components/Lease";

const { width } = Dimensions.get("window");

const ICON_SIZE = responsivePixelSize(24);

const CarDetails: React.FC<HomeNavigationProps<"CarDetails">> = ({
  route: {
    params: { data, currentImageIndex },
  },
  navigation,
}) => {
  const theme = useTheme<Theme>();
  const { goBackButtonStyles } = useStyles();
  const scrollViewRef = useAnimatedRef<Animated.ScrollView>();
  const { images, dailyRate, make, model } = data;

  const imageUris = images.map((image) => `${baseURL}${image}`);

  useEffect(() => {
    runOnUI(() => {
      "worklet";
      scrollTo(scrollViewRef, width * currentImageIndex, 0, true);
    })();
  }, [currentImageIndex, scrollViewRef]);

  return (
    <Box>
      <RectButton onPress={navigation.goBack} style={goBackButtonStyles}>
        <Feather
          name="chevron-left"
          size={ICON_SIZE}
          color={theme.colors.textMediumLight1}
        />
      </RectButton>
      <CarImages {...{ imageUris, scrollViewRef }} />
      <CarSpecs {...{ data }} />
      <TimeInterval />
      <Lease {...{ dailyRate, make, model, navigation }} />
    </Box>
  );
};

export default CarDetails;
