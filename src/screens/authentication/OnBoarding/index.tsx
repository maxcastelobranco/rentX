import React from "react";
import { BoxProps } from "@shopify/restyle";

import { Box, Theme } from "../../../theme";
import { AuthenticationNavigationProps } from "../../../routes/authentication";

const OnBoarding: React.FC<
  AuthenticationNavigationProps<"OnBoarding">
> = () => {
  const containerStyles: BoxProps<Theme> = {
    backgroundColor: "primary",
    flex: 1,
  };
  return <Box {...containerStyles} />;
};

export default OnBoarding;
