import React from "react";

import { Box } from "../../../../theme";
import { TabNavigationProps } from "../../../../routes/tabs";

const Profile: React.FC<TabNavigationProps<"Profile">> = () => {
  return <Box flex={1} backgroundColor="primary" />;
};

export default Profile;
