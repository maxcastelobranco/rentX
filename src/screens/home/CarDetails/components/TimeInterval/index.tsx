import React, { useMemo } from "react";
import { format } from "date-fns";

import { Box, Text } from "../../../../../theme";
import { useAppContext } from "../../../../../context";
import LongArrow from "../../../../../components/svgs/static/LongArrow";

import { useStyles } from "./styles";

const TimeInterval: React.FC = () => {
  const {
    state: {
      timeInterval: { startDate, endDate },
    },
  } = useAppContext();

  const { containerStyles, labelStyles, dateStyles } = useStyles();

  const formattedStartDate = useMemo(() => format(startDate, "LLL do, yyy"), [
    startDate,
  ]);
  const formattedEndDate = useMemo(() => format(endDate, "LLL do, yyy"), [
    endDate,
  ]);

  return (
    <Box {...containerStyles}>
      <Box>
        <Text {...labelStyles}>from</Text>
        <Text {...dateStyles}>{formattedStartDate}</Text>
      </Box>
      <LongArrow />
      <Box>
        <Text {...labelStyles}>to</Text>
        <Text {...dateStyles}>{formattedEndDate}</Text>
      </Box>
    </Box>
  );
};

export default TimeInterval;
