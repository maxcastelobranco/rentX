import React from "react";
import { TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import Animated from "react-native-reanimated";
import { RectButton } from "react-native-gesture-handler";

import Placeholder from "../../../../../../../components/animated/Input/components/Placeholder";
import { Box, Theme } from "../../../../../../../theme";
import responsivePixelSize from "../../../../../../../utils/responsivePixelSize";

import { useStyles } from "./styles";

interface InputProps {
  placeholderAnimationDriver: Animated.SharedValue<number>;
  inputRef: React.RefObject<TextInput>;
  onFocus: () => void;
  onBlur: () => void;
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
  value: string;
}

const ICON_SIZE = responsivePixelSize(24);

const Input: React.FC<InputProps> = ({
  placeholderAnimationDriver,
  inputRef,
  onFocus,
  onBlur,
  onChangeText,
  onSubmitEditing,
  value,
}) => {
  const theme = useTheme<Theme>();
  const { containerStyles, inputStyles, iconContainerStyles } = useStyles();

  return (
    <Box {...containerStyles}>
      <Placeholder
        animationDriver={placeholderAnimationDriver}
        placeholderText="Search"
      />
      <TextInput
        ref={inputRef}
        style={inputStyles}
        {...{ onFocus, onBlur, onChangeText, onSubmitEditing, value }}
      />
      <RectButton
        onPress={() => {
          onSubmitEditing();
          onBlur();
          inputRef.current?.blur();
        }}
      >
        <Box {...iconContainerStyles}>
          <Feather
            name="search"
            size={ICON_SIZE}
            color={theme.colors.textDark1}
          />
        </Box>
      </RectButton>
    </Box>
  );
};

export default Input;
