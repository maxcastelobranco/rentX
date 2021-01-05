import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Animated, { useDerivedValue, withSpring } from "react-native-reanimated";
import { TextInput } from "react-native";
import { useTheme } from "@shopify/restyle";

import { Box, Theme } from "../../../../../../theme";

import { useStyles } from "./styles";
import Input from "./Input";
import Suggestions from "./Suggestions";

export interface MakeAndModel {
  id: string;
  makeAndModel: string;
  makeAndModelSplit: string[];
}

const makesAndModels = require("../../../../../../db/makesAndModels.json") as MakeAndModel[];

interface SearchInputProps {
  focused: Animated.SharedValue<boolean>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({
  focused,
  value,
  setValue,
  setQuery,
}) => {
  const theme = useTheme<Theme>();
  const { containerStyles } = useStyles();
  const inputRef = useRef<TextInput>(null);
  const placeholderAnimationDriver = useDerivedValue(() =>
    withSpring(focused.value || value ? 1 : 0)
  );

  const [filteredMakesAndModels, setFilteredMakesAndModels] = useState<
    MakeAndModel[]
  >([]);

  const regex = useMemo(() => {
    return new RegExp(value, "i");
  }, [value]);

  const onFocus = useCallback(() => {
    focused.value = true;
  }, [focused]);
  const onBlur = useCallback(() => {
    focused.value = false;
  }, [focused]);

  const onChangeText = useCallback(
    (text: string) => {
      setValue(text);
    },
    [setValue]
  );
  const onSubmitEditing: () => void = useCallback(() => {
    setQuery(value);
    setValue("");
  }, [setQuery, setValue, value]);
  const onSuggestionPress = useCallback(
    (id: string) => {
      setQuery(id);
      setValue("");
      onBlur();
      inputRef.current?.blur();
    },
    [onBlur, setQuery, setValue]
  );

  useEffect(() => {
    if (!value || value.length < 2) {
      setFilteredMakesAndModels([]);
    } else {
      const results = makesAndModels.filter(({ makeAndModel }) =>
        regex.test(makeAndModel)
      );
      setFilteredMakesAndModels(results);
    }
  }, [regex, value]);

  return (
    <Box
      {...containerStyles}
      style={{
        marginTop: -theme.spacing.l,
      }}
    >
      <Input
        {...{
          placeholderAnimationDriver,
          inputRef,
          onFocus,
          onBlur,
          onChangeText,
          onSubmitEditing,
          value,
        }}
      />
      <Suggestions
        {...{
          filteredMakesAndModels,
          regex,
          onSuggestionPress,
          value,
        }}
      />
    </Box>
  );
};

export default SearchInput;
