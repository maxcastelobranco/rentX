import React from "react";
import { Dimensions, KeyboardAvoidingView } from "react-native";
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import { useForm } from "react-hook-form";

import { Box, Text } from "../../../theme";
import { AuthenticationNavigationProps } from "../../../routes/authentication";
import GoBackButton from "../../../components/static/GoBackButton";
import ProgressIndicator from "../../../components/animated/ProgressIndicator";

import { slideData } from "./slideData";
import { useStyles } from "./styles";

const { width } = Dimensions.get("window");

interface FormValues {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const SignUp: React.FC<AuthenticationNavigationProps<"SignUp">> = ({
  navigation,
}) => {
  const {
    containerStyles,
    headerStyles,
    progressIndicatorContainerStyles,
    titleStyles,
    descriptionStyles,
  } = useStyles();
  const scrollViewRef = useAnimatedRef<Animated.ScrollView>();
  const translationX = useSharedValue(0);
  const currentIndex = useDerivedValue(() => translationX.value / width);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationX.value = event.contentOffset.x;
  });

  const { control, errors, formState, handleSubmit } = useForm<FormValues>({
    mode: "onChange",
    criteriaMode: "all",
  });
  const scrollEnabled =
    (formState.touched.name &&
      formState.touched.email &&
      !errors.name &&
      !errors.email) ||
    false;
  const submitEnabled =
    (formState.touched.password &&
      formState.touched.passwordConfirmation &&
      !errors.password &&
      !errors.passwordConfirmation) ||
    false;

  const onSubmit = handleSubmit<FormValues>((data) => {
    console.log(data);
    navigation.navigate("SignUpSuccessful");
  });

  return (
    <KeyboardAvoidingView style={containerStyles} behavior="position">
      <Box {...headerStyles}>
        <GoBackButton />
        <Box {...progressIndicatorContainerStyles}>
          {slideData.map((_, index) => (
            <ProgressIndicator key={index} {...{ index, currentIndex }} />
          ))}
        </Box>
      </Box>
      <Text {...titleStyles}>Create your account</Text>
      <Text {...descriptionStyles}>Sign up fast and easy</Text>
      <Animated.ScrollView
        ref={scrollViewRef}
        onScroll={scrollHandler}
        showsHorizontalScrollIndicator={false}
        horizontal
        snapToInterval={width}
        decelerationRate="fast"
        scrollEventThrottle={16}
        {...{ scrollEnabled }}
      >
        {slideData.map((Slide, index) => (
          <Slide
            key={index}
            {...{
              control,
              errors,
              scrollEnabled,
              submitEnabled,
              index,
              scrollViewRef,
              onSubmit,
            }}
          />
        ))}
      </Animated.ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
