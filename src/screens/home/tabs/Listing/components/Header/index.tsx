import React from "react";

import { Box, Text } from "../../../../../../theme";
import { useListingPageCars } from "../../../../../../hooks/useListingPageCars";
import Loading from "../../../../../../components/static/Loading";

import { useStyles } from "./styles";

interface HeaderProps {
  query: string;
}

const Header: React.FC<HeaderProps> = ({ query }) => {
  const { containerStyles, titleStyles, numberOfCarsStyles } = useStyles();
  const { cars, error, isLoading } = useListingPageCars(query);

  return (
    <Box {...containerStyles}>
      <Text {...titleStyles}>Listing</Text>
      {isLoading ? (
        <Loading color="backgroundLight1" size="small" />
      ) : error ? (
        <Text {...numberOfCarsStyles}>{error}</Text>
      ) : (
        <Text {...numberOfCarsStyles}>{cars?.length} cars</Text>
      )}
    </Box>
  );
};

export default Header;
