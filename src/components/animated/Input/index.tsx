import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { TextInput, TextInputProps } from "react-native";
import { FieldError } from "react-hook-form";
import { BoxProps, useTheme } from "@shopify/restyle";
import { Feather } from "@expo/vector-icons";
import Animated, {
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { RectButton } from "react-native-gesture-handler";

import { Box, Theme } from "../../../theme";
import responsivePixelSize from "../../../utils/responsivePixelSize";

import { INPUT_HEIGHT, useStyles } from "./styles";
import Placeholder from "./components/Placeholder";

interface InputProps {
  privateProps: {
    value: string;
    onChange(text: string): void;
    onBlur(): void;
    error?: FieldError;
    iconName: string;
    placeholderText: string;
    extraContainerStyles?: BoxProps<Theme>;
  };
  inputProps?: TextInputProps;
  isPasswordInput?: boolean;
}
interface InputRef {
  focus(): void;
}

const ICON_SIZE = responsivePixelSize(24);

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { privateProps, inputProps, isPasswordInput },
  ref
) => {
  const {
    value,
    onChange,
    onBlur,
    error,
    iconName,
    extraContainerStyles,
    placeholderText,
  } = privateProps;
  const theme = useTheme<Theme>();
  const {
    containerStyles,
    iconContainerStyles,
    inputContainerStyles,
    inputStyles,
    secureTextEntryStyles,
  } = useStyles();
  const inputRef = useRef<TextInput>(null);
  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current?.focus();
    },
  }));
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const focused = useSharedValue(false);
  const placeholderAnimationDriver = useDerivedValue(() => {
    return withSpring(focused.value || value ? 1 : 0);
  });

  const handleFocus = () => {
    focused.value = true;
  };
  const handleBlur = () => {
    focused.value = false;
    onBlur();
  };
  const toggleSecureTextEntry = () => {
    setSecureTextEntry((prevState) => !prevState);
  };

  return (
    <Box {...containerStyles} {...extraContainerStyles}>
      <Animated.View style={[iconContainerStyles]}>
        <Feather
          name={iconName}
          size={ICON_SIZE}
          color={error ? theme.colors.primary : theme.colors.textDark2}
        />
      </Animated.View>
      <Animated.View style={[inputContainerStyles]}>
        <Placeholder
          animationDriver={placeholderAnimationDriver}
          {...{ placeholderText }}
        />
        <TextInput
          {...{ value }}
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={onChange}
          style={[
            inputStyles,
            {
              right: isPasswordInput ? INPUT_HEIGHT : theme.spacing.s,
            },
          ]}
          secureTextEntry={isPasswordInput && secureTextEntry}
          {...inputProps}
        />
        {isPasswordInput && (
          <RectButton
            onPress={toggleSecureTextEntry}
            style={secureTextEntryStyles}
          >
            {secureTextEntry ? (
              <Feather
                name="eye-off"
                size={ICON_SIZE}
                color={theme.colors.textDark2}
              />
            ) : (
              <Feather
                name="eye"
                size={ICON_SIZE}
                color={theme.colors.textDark2}
              />
            )}
          </RectButton>
        )}
      </Animated.View>
    </Box>
  );
};

export default forwardRef(Input);
