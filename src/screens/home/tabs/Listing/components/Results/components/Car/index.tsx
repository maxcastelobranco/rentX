import React from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { Image } from "react-native";

import { CarData } from "../../../../../../../../context/reducers/carParamsReducer";
import Electric from "../../../../../../../../components/svgs/static/engineTypes/Electric";
import Gas from "../../../../../../../../components/svgs/static/engineTypes/Gas";
import Hybrid from "../../../../../../../../components/svgs/static/engineTypes/Hybrid";
import { Box, Text } from "../../../../../../../../theme";
import { baseURL } from "../../../../../../../../services/api";
import { CAR_ITEM_INTERVAL, CAR_ITEM_WIDTH } from "../../constants";
import responsivePixelSize from "../../../../../../../../utils/responsivePixelSize";
import { money } from "../../../../../../../../utils/money";

import { useStyles } from "./styles";

interface CarProps {
  data: CarData;
  index: number;
  translationY: Animated.SharedValue<number>;
}

const ICON_SIZE = responsivePixelSize(24);

const Car: React.FC<CarProps> = ({ data, index, translationY }) => {
  const {
    images: [image],
    engineType,
    make,
    model,
    dailyRate,
  } = data;

  const navigation = useNavigation();
  const {
    containerStyles,
    iconStyles,
    imageStyles,
    labelStyles,
    contentStyles,
  } = useStyles();

  const inputRange = [
    CAR_ITEM_INTERVAL * (index - 1),
    CAR_ITEM_INTERVAL * index,
    CAR_ITEM_INTERVAL * (index + 1),
  ];
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translationY.value,
      inputRange,
      [0.5, 1, 0],
      Extrapolate.CLAMP
    );
    const translateX = interpolate(
      translationY.value,
      inputRange,
      [0, 0, CAR_ITEM_WIDTH],
      Extrapolate.CLAMP
    );
    return {
      opacity,
      transform: [{ translateX }],
    };
  });

  const icon =
    engineType === "electric" ? (
      <Electric style={iconStyles} width={ICON_SIZE} height={ICON_SIZE} />
    ) : engineType === "gas" ? (
      <Gas style={iconStyles} width={ICON_SIZE} height={ICON_SIZE} />
    ) : (
      <Hybrid style={iconStyles} width={ICON_SIZE} height={ICON_SIZE} />
    );

  const onPress = () => {
    navigation.navigate("CarDetails", {
      data,
      currentImageIndex: 0,
    });
  };

  const imageUri = `${baseURL}${image}`;

  return (
    <RectButton {...{ onPress }}>
      <Animated.View style={[animatedStyle, containerStyles]}>
        <Box>
          <Text {...labelStyles}>{make}</Text>
          <Text {...contentStyles}>{model}</Text>
          <Text {...labelStyles} marginTop="s">
            Daily Rate
          </Text>
          <Text {...contentStyles} color="primary">
            {`${money(dailyRate)}`}
          </Text>
        </Box>
        <Image
          resizeMode="contain"
          source={{ uri: imageUri }}
          style={imageStyles}
        />
        {icon}
      </Animated.View>
    </RectButton>
  );
};

export default Car;
