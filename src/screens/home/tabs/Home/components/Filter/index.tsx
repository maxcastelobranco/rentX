import React from "react";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

import { SHEET_HEIGHT, useStyles } from "./styles";

interface FilterProps {
  open: Animated.SharedValue<boolean>;
}

const Filter: React.FC<FilterProps> = ({ open }) => {
  const { containerStyles } = useStyles();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(
            open.value ? SHEET_HEIGHT * 0.3 : SHEET_HEIGHT
          ),
        },
      ],
    };
  });

  return <Animated.View style={[containerStyles, animatedStyle]} />;
};

export default Filter;
