import React from "react";

import FullScreenNotification from "../../../components/animated/FullScreenNotification";
import { HomeNavigationProps } from "../../../routes/home";

const CarLeaseSuccessful: React.FC<
  HomeNavigationProps<"CarLeaseSuccessful">
> = ({
  route: {
    params: { makeAndModel },
  },
  navigation,
}) => {
  const onPress = () => {
    navigation.navigate("CalendarScreen");
  };

  return (
    <FullScreenNotification
      okButtonPress={onPress}
      title={`${makeAndModel} was leased!`}
      description={`Now just get yourself to the closest rentX dealership. ${makeAndModel} will be waiting for you.`}
    />
  );
};

export default CarLeaseSuccessful;
