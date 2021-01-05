import React, { useState } from "react";
import { useDerivedValue, useSharedValue } from "react-native-reanimated";

import { Box } from "../../../../theme";
import { TabNavigationProps } from "../../../../routes/tabs";
import { usePreventGoingBack } from "../../../../hooks/usePreventGoingBack";
import Overlay from "../components/Overlay";

import { useStyles } from "./styles";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Results from "./components/Results";

const Listing: React.FC<TabNavigationProps<"Listing">> = ({ navigation }) => {
  usePreventGoingBack("CalendarScreen", navigation);
  const { containerStyles } = useStyles();
  const focused = useSharedValue(false);
  const [query, setQuery] = useState("");
  const [searchInputValue, setSearchInputValue] = useState("");

  const open = useDerivedValue(() => focused.value || !!searchInputValue);

  return (
    <Box {...containerStyles}>
      <Header />
      <SearchInput
        value={searchInputValue}
        setValue={setSearchInputValue}
        {...{ focused, setQuery }}
      />
      <Results {...{ query }} />
      <Overlay {...{ open }} />
    </Box>
  );
};

export default Listing;
