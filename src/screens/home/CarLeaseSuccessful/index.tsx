import React from "react";
import { CommonActions } from "@react-navigation/native";

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
    navigation.dispatch(
      CommonActions.reset({
        routes: [{ name: "Home" }],
      })
    );
  };

  return (
    <FullScreenNotification
      {...{ onPress }}
      title={`${makeAndModel} was leased!`}
      description={`Now just get yourself to the closest RENTX dealership. ${makeAndModel} will be waiting for you.`}
    />
  );
};

export default CarLeaseSuccessful;
