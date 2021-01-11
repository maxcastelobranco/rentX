import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { mix } from "react-native-redash";

import { Box, Text } from "../../../../../../theme";
import Edit from "../../../../../../components/svgs/static/Edit";
import Logout from "../../../../../../components/svgs/static/Logout";
import { initialUserState, useAppContext } from "../../../../../../context";
import { AuthenticationActionTypes } from "../../../../../../context/reducers/authenticationReducer";

import { useStyles } from "./styles";
import Avatar from "./components/Avatar";

interface HeaderProps {
  isImageFullScreen: boolean;
  setIsImageFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
  isImageFullScreenTimingTransition: Animated.SharedValue<number>;
  isImageFullScreenSpringTransition: Animated.SharedValue<number>;
  avatarUrl: string;
}

const Header: React.FC<HeaderProps> = ({
  isImageFullScreen,
  setIsImageFullScreen,
  isImageFullScreenTimingTransition,
  isImageFullScreenSpringTransition,
  avatarUrl,
}) => {
  const { containerStyles, buttonsContainerStyles, titleStyles } = useStyles();
  const { dispatch } = useAppContext();
  const [buttonsContainerHeight, setButtonsContainerHeight] = useState(0);

  const animatedButtonsContainerStyle = useAnimatedStyle(() => {
    return {
      opacity: mix(isImageFullScreenTimingTransition.value, 1, 0),
      transform: [
        {
          translateY: mix(
            isImageFullScreenSpringTransition.value,
            0,
            -buttonsContainerHeight
          ),
        },
      ],
    };
  });

  const logout = () => {
    AsyncStorage.clear().catch(console.error);
    dispatch({
      type: AuthenticationActionTypes.UpdateUser,
      payload: initialUserState,
    });
  };

  return (
    <Box {...containerStyles}>
      <Animated.View
        onLayout={({
          nativeEvent: {
            layout: { height },
          },
        }) => {
          setButtonsContainerHeight(height);
        }}
        style={animatedButtonsContainerStyle}
      >
        <Box {...buttonsContainerStyles}>
          <RectButton>
            <Edit />
          </RectButton>
          <Text {...titleStyles}>Profile</Text>
          <RectButton onPress={logout}>
            <Logout />
          </RectButton>
        </Box>
      </Animated.View>
      <Avatar
        {...{
          isImageFullScreen,
          setIsImageFullScreen,
          isImageFullScreenTimingTransition,
          avatarUrl,
          buttonsContainerHeight,
        }}
      />
    </Box>
  );
};

export default Header;
