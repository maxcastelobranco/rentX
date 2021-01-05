import React from "react";
import { ScrollView, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";

import { Box, Theme } from "../../../../../../../theme";
import { MakeAndModel } from "../index";

import { useStyles } from "./styles";

interface SuggestionsProps {
  filteredMakesAndModels: MakeAndModel[];
  regex: RegExp;
  onSuggestionPress: (id: string) => void;
  value: string;
}

const Suggestions: React.FC<SuggestionsProps> = ({
  filteredMakesAndModels,
  regex,
  onSuggestionPress,
  value,
}) => {
  const theme = useTheme<Theme>();
  const {
    scrollViewStyles,
    suggestionContainerStyles,
    suggestionStyles,
  } = useStyles();

  return (
    <ScrollView style={scrollViewStyles}>
      {filteredMakesAndModels.map(({ id, makeAndModel, makeAndModelSplit }) => {
        const matchIndex = makeAndModel.search(regex);

        return (
          <RectButton
            key={id}
            onPress={() => {
              onSuggestionPress(id);
            }}
          >
            <Box {...suggestionContainerStyles}>
              {makeAndModelSplit.map((char, index) => {
                const fontWeight =
                  index >= matchIndex && index < value.length + matchIndex
                    ? "bold"
                    : "normal";
                const paddingLeft = index ? 0 : theme.spacing.s;

                return (
                  <Text
                    key={index}
                    style={[
                      suggestionStyles,
                      {
                        paddingLeft,
                        fontWeight,
                      },
                    ]}
                  >
                    {char}
                  </Text>
                );
              })}
            </Box>
          </RectButton>
        );
      })}
    </ScrollView>
  );
};

export default Suggestions;
