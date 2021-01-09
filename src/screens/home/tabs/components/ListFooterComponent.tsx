import React from "react";
import { BoxProps } from "@shopify/restyle";

import { Box, Theme } from "../../../../theme";
import { CAR_ITEM_WIDTH } from "../Home/components/Results/constants";
import StopSign from "../../../../components/svgs/static/StopSign";
import RedLight from "../../../../components/svgs/static/RedLight";

interface ListFooterComponentProps {
  reachedTheEnd: boolean | undefined;
  height: number;
}

const ListFooterComponent: React.FC<ListFooterComponentProps> = ({
  reachedTheEnd,
  height,
}) => {
  const containerStyles: BoxProps<Theme> = {
    width: CAR_ITEM_WIDTH,
    height,
    alignSelf: "center",
    alignItems: "center",
    paddingTop: "s",
  };

  return (
    <>
      {reachedTheEnd ? (
        <Box {...containerStyles}>
          {/*<Text variant="smallTextMediumDark">That's all folks (☞ﾟヮﾟ)☞</Text>*/}
          <StopSign />
        </Box>
      ) : (
        <Box {...containerStyles}>
          {/*<Loading color="primary" />*/}
          <RedLight />
        </Box>
      )}
    </>
  );
};

export default ListFooterComponent;
