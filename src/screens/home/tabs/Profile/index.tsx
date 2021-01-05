import React from "react";

import { Box } from "../../../../theme";
import { TabNavigationProps } from "../../../../routes/tabs";
import { usePreventGoingBack } from "../../../../hooks/usePreventGoingBack";

const Profile: React.FC<TabNavigationProps<"Profile">> = ({ navigation }) => {
  usePreventGoingBack("CalendarScreen", navigation);

  return <Box flex={1} backgroundColor="primary" />;
};

export default Profile;
