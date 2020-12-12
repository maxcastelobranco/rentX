import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { useStyles } from "./styles";

const GoBackButton: React.FC = () => {
  const navigation = useNavigation();
  const { containerStyles, ICON_SIZE } = useStyles();
  return (
    <RectButton style={containerStyles} onPress={navigation.goBack}>
      <Feather name="chevron-left" size={ICON_SIZE} />
    </RectButton>
  );
};

export default GoBackButton;
