import React from "react";

import { Box, Text } from "../../../../../../theme";
import Loading from "../../../../../../components/static/Loading";
import { useCarLeases } from "../../../../../../hooks/useCarLeases";
import { useAppContext } from "../../../../../../context";

import { useStyles } from "./styles";

const Header: React.FC = () => {
  const {
    state: {
      authentication: {
        user: { id },
      },
    },
  } = useAppContext();
  const { containerStyles, titleStyles, numberOfCarsStyles } = useStyles();
  const { carLeases, error, isLoading } = useCarLeases(id);

  return (
    <Box {...containerStyles}>
      <Text {...titleStyles}>Leases</Text>
      {isLoading ? (
        <Loading color="backgroundLight1" size="small" />
      ) : error ? (
        <Text {...numberOfCarsStyles}>{error}</Text>
      ) : (
        <Text {...numberOfCarsStyles}>{carLeases?.length} leases</Text>
      )}
    </Box>
  );
};

export default Header;
