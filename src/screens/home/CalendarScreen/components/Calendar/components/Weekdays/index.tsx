import React from "react";

import { Box, Text } from "../../../../../../../theme";
import { weekdays } from "../../../DatePicker/constants";

import { useStyles } from "./styles";

const Weekdays: React.FC = () => {
  const { containerStyles, weekdayStyles } = useStyles();

  return (
    <Box {...containerStyles}>
      {weekdays.map((weekday) => (
        <Text {...weekdayStyles} key={weekday}>
          {weekday}
        </Text>
      ))}
    </Box>
  );
};

export default Weekdays;
