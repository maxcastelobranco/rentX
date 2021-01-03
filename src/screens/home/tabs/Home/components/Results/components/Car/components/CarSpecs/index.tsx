import React from "react";

import { Box, Text } from "../../../../../../../../../../theme";

import { useStyles } from "./styles";

interface CarSpecsProps {
  make: string;
  model: string;
  dailyRate: number;
}

const CarSpecs: React.FC<CarSpecsProps> = ({ make, model, dailyRate }) => {
  const {
    makeModelContainerStyles,
    dailyRateContainerStyles,
    labelStyles,
    contentStyles,
  } = useStyles();
  return (
    <>
      <Box pointerEvents="none" {...makeModelContainerStyles}>
        <Text {...labelStyles}>{make}</Text>
        <Text {...contentStyles}>{model}</Text>
      </Box>
      <Box pointerEvents="none" {...dailyRateContainerStyles}>
        <Text {...labelStyles}>Daily Rate</Text>
        <Text {...contentStyles} color="primary">
          {`$${dailyRate}`}
        </Text>
      </Box>
    </>
  );
};

export default CarSpecs;
