import React from "react";

import { Box, Text } from "../../../../theme";
import { CAR_ITEM_WIDTH } from "../Home/components/Results/constants";
import Loading from "../../../../components/static/Loading";

interface ListFooterComponentProps {
  reachedTheEnd: boolean | undefined;
  height: number;
}

const ListFooterComponent: React.FC<ListFooterComponentProps> = ({
  reachedTheEnd,
  height,
}) => {
  return (
    <>
      {reachedTheEnd ? (
        <Box
          width={CAR_ITEM_WIDTH}
          alignSelf="center"
          alignItems="center"
          paddingTop="s"
          {...{ height }}
        >
          <Text variant="smallTextMediumDark">That's all folks (☞ﾟヮﾟ)☞</Text>
        </Box>
      ) : (
        <Box
          width={CAR_ITEM_WIDTH}
          alignSelf="center"
          alignItems="center"
          paddingTop="s"
          {...{ height }}
        >
          <Loading color="primary" />
        </Box>
      )}
    </>
  );
};

export default ListFooterComponent;
