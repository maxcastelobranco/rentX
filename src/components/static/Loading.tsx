import React from "react";
import { useTheme } from "@shopify/restyle";
import { ActivityIndicator } from "react-native";

import { Colors, Theme } from "../../theme";

interface LoadingProps {
  color?: Colors;
  size?: "large" | "small";
}

const Loading: React.FC<LoadingProps> = ({ color, size = "large" }) => {
  const theme = useTheme<Theme>();

  const activityIndicatorColor = color
    ? theme.colors[color]
    : theme.colors.backgroundLight1;

  return <ActivityIndicator color={activityIndicatorColor} {...{ size }} />;
};

export default Loading;
