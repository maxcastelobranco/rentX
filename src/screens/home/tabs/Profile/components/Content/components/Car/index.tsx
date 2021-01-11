import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { Image } from "react-native";

import Electric from "../../../../../../../../components/svgs/static/engineTypes/Electric";
import Gas from "../../../../../../../../components/svgs/static/engineTypes/Gas";
import Hybrid from "../../../../../../../../components/svgs/static/engineTypes/Hybrid";
import { Box, Text } from "../../../../../../../../theme";
import responsivePixelSize from "../../../../../../../../utils/responsivePixelSize";
import { money } from "../../../../../../../../utils/money";
import { useCar } from "../../../../../../../../hooks/useCar";
import Loading from "../../../../../../../../components/static/Loading";

import { useStyles } from "./styles";

interface CarProps {
  id: string;
}

const ICON_SIZE = responsivePixelSize(24);

const Car: React.FC<CarProps> = ({ id }) => {
  const navigation = useNavigation();
  const {
    containerStyles,
    iconStyles,
    imageStyles,
    labelStyles,
    contentStyles,
  } = useStyles();
  const { car, isLoading, error } = useCar(id);

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

  return (
    <RectButton {...{ onPress }}>
      <Box {...containerStyles}>
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
          source={{ uri: image }}
          style={imageStyles}
        />
        {icon}
      </Box>
    </RectButton>
  );
};

export default Car;
