import React from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { Image } from "react-native";
import { format, isFuture, isPast, isToday, parseISO } from "date-fns";

import Electric from "../../../../../../../../components/svgs/static/engineTypes/Electric";
import Gas from "../../../../../../../../components/svgs/static/engineTypes/Gas";
import Hybrid from "../../../../../../../../components/svgs/static/engineTypes/Hybrid";
import { Box, Text } from "../../../../../../../../theme";
import { LEASE_ITEM_INTERVAL, LEASE_ITEM_WIDTH } from "../../constants";
import responsivePixelSize from "../../../../../../../../utils/responsivePixelSize";
import { money } from "../../../../../../../../utils/money";
import { CarLease } from "../../../../../../../../hooks/useCarLeases";
import { useCar } from "../../../../../../../../hooks/useCar";
import Loading from "../../../../../../../../components/static/Loading";
import LongArrow from "../../../../../../../../components/svgs/static/LongArrow";

import { useStyles } from "./styles";

interface CarProps {
  data: CarLease;
  index: number;
  translationY: Animated.SharedValue<number>;
}

const ICON_SIZE = responsivePixelSize(24);

const CarLeaseItem: React.FC<CarProps> = ({
  data: { carId, startDate, endDate },
  index,
  translationY,
}) => {
  const { car, error, isLoading } = useCar(carId);

  const navigation = useNavigation();
  const {
    containerStyles,
    iconStyles,
    imageStyles,
    labelStyles,
    contentStyles,
    timeIntervalStyles,
    dateStyles,
  } = useStyles();

  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translationY.value,
      [
        LEASE_ITEM_INTERVAL * (index - 2),
        LEASE_ITEM_INTERVAL * (index - 1),
        LEASE_ITEM_INTERVAL * index,
      ],
      [0.25, 0.75, 1],
      Extrapolate.CLAMP
    );
    const translateX =
      index === 0
        ? 0
        : interpolate(
            translationY.value,
            [
              LEASE_ITEM_INTERVAL * (index - 1),
              LEASE_ITEM_INTERVAL * index,
              LEASE_ITEM_INTERVAL * (index + 1),
            ],
            [0, 0, LEASE_ITEM_WIDTH],
            Extrapolate.CLAMP
          );
    return {
      opacity,
      transform: [{ translateX }],
    };
  });

  if (error) {
    return <Text variant="smallTextMediumDark">{error}</Text>;
  }
  if (isLoading) {
    return <Loading color="primary" />;
  }
  if (!car) {
    return (
      <Text variant="smallTextMediumDark">I guess there's no fucking car</Text>
    );
  }

  const {
    images: [image],
    engineType,
    make,
    model,
    dailyRate,
  } = car;

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
      data: car,
      currentImageIndex: 0,
    });
  };

  const parsedStartDate = parseISO(startDate);
  const parsedEndDate = parseISO(endDate);
  const formattedStartDate = format(parsedStartDate, "LLL do, yyy");
  const formattedEndDate = format(parsedEndDate, "LLL do, yyy");
  const leasedInThePast = isPast(parsedEndDate);
  const isCurrentlyBeingLeased =
    isToday(parsedStartDate) ||
    (isPast(parsedStartDate) && isFuture(parsedEndDate));

  return (
    <Animated.View style={animatedStyle}>
      <RectButton {...{ onPress }}>
        <Box style={containerStyles}>
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
          {!!image.length && (
            <Image
              resizeMode="contain"
              source={{ uri: image }}
              style={imageStyles}
            />
          )}
          {icon}
        </Box>
      </RectButton>
      <Box {...timeIntervalStyles}>
        <Text
          {...labelStyles}
          color={isCurrentlyBeingLeased ? "success" : "textMediumLight1"}
        >
          {isCurrentlyBeingLeased
            ? "Leasing:"
            : leasedInThePast
            ? "Leased:"
            : "Scheduled:"}
        </Text>
        <Text
          {...dateStyles}
          color={isCurrentlyBeingLeased ? "success" : "textDark2"}
        >
          {formattedStartDate}
        </Text>
        <LongArrow width={20} />
        <Text
          {...dateStyles}
          color={isCurrentlyBeingLeased ? "success" : "textDark2"}
        >
          {formattedEndDate}
        </Text>
      </Box>
    </Animated.View>
  );
};

export default CarLeaseItem;
