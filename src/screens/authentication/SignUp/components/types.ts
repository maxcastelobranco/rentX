import React from "react";
import Animated from "react-native-reanimated";

import { BaseControllerProps } from "../../../../utils/types";

export interface SlideProps extends BaseControllerProps {
  scrollEnabled: boolean;
  submitEnabled: boolean;
  index: number;
  scrollViewRef: React.RefObject<Animated.ScrollView>;
  onSubmit: (e?: React.BaseSyntheticEvent | undefined) => Promise<void>;
}
