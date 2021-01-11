import React, { useEffect, useState } from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { mix } from "react-native-redash";

import { Box, Text } from "../../../../../../theme";
import { useCarLeases } from "../../../../../../hooks/useCarLeases";
import { useAppContext } from "../../../../../../context";
import Loading from "../../../../../../components/static/Loading";

import { useStyles } from "./styles";
import Car from "./components/Car";

interface ContentProps {
  isImageFullScreenTimingTransition: Animated.SharedValue<number>;
}

interface FavoriteCar {
  id: string;
  numberOfLeases: number;
}

const Content: React.FC<ContentProps> = ({
  isImageFullScreenTimingTransition,
}) => {
  const {
    state: {
      authentication: {
        user: { id: userId, firstName, lastName },
      },
    },
  } = useAppContext();
  const {
    containerStyles,
    userNameStyles,
    rowStyles,
    totalLeasesContainerStyles,
    labelStyles,
    contentStyles,
  } = useStyles();
  const { carLeases, isLoading: isLoadingCarLeases } = useCarLeases(userId);
  const [isLoadingFavoriteCarInfo, setIsLoadingFavoriteCarInfo] = useState(
    true
  );
  const [favoriteCarInfo, setFavoriteCarInfo] = useState<FavoriteCar>({
    id: "",
    numberOfLeases: 0,
  });

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      flex: mix(isImageFullScreenTimingTransition.value, 1.2, 0),
      opacity: mix(isImageFullScreenTimingTransition.value, 1, 0),
      transform: [
        {
          translateY: mix(isImageFullScreenTimingTransition.value, 0, 20),
        },
      ],
    };
  });

  useEffect(() => {
    if (carLeases) {
      const leaseMap: { [key: string]: number } = {};

      carLeases.map(({ carId }) => {
        if (leaseMap[carId]) {
          leaseMap[carId] += 1;
        } else {
          leaseMap[carId] = 1;
        }
      });
      const sortedLeases = Object.entries(leaseMap).sort((a, b) => {
        if (a[1] < b[1]) {
          return 1;
        }
        if (a[1] > b[1]) {
          return -1;
        }
        return 0;
      });
      const [topLease] = sortedLeases;
      const [id] = topLease;
      const [, numberOfLeases] = topLease;

      if (numberOfLeases !== 1 && numberOfLeases !== sortedLeases[1][1]) {
        setFavoriteCarInfo({
          id,
          numberOfLeases,
        });
      } else {
        setFavoriteCarInfo({
          id: "",
          numberOfLeases: 0,
        });
      }

      setIsLoadingFavoriteCarInfo(false);
    }
  }, [carLeases]);

  const favoriteCarExists =
    favoriteCarInfo.id !== "" && favoriteCarInfo.numberOfLeases !== 0;

  return (
    <Animated.View style={[containerStyles, animatedContainerStyle]}>
      <Text {...userNameStyles}>{`${firstName} ${lastName}`}</Text>
      <Box {...totalLeasesContainerStyles}>
        <Text {...labelStyles}>Total leases</Text>
        {isLoadingCarLeases || isLoadingFavoriteCarInfo ? (
          <Loading size="small" color="primary" />
        ) : (
          <Text {...contentStyles}>{carLeases?.length}</Text>
        )}
      </Box>
      {favoriteCarExists && (
        <>
          <Box {...rowStyles}>
            <Text {...labelStyles}>Favorite ride</Text>
            {isLoadingCarLeases || isLoadingFavoriteCarInfo ? (
              <Loading size="small" color="primary" />
            ) : (
              <Text {...contentStyles}>
                Leased {favoriteCarInfo.numberOfLeases} times
              </Text>
            )}
          </Box>
          {!isLoadingFavoriteCarInfo && <Car id={favoriteCarInfo.id} />}
        </>
      )}
    </Animated.View>
  );
};

export default Content;
