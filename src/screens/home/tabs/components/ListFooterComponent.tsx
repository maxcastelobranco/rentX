import React from "react";

import { Box, Text } from "../../../../theme";
import {
  CAR_ITEM_HEIGHT,
  CAR_ITEM_WIDTH,
} from "../Home/components/Results/constants";
import Loading from "../../../../components/static/Loading";

interface ListFooterComponentProps {
  reachedTheEnd: boolean | undefined;
}

const ListFooterComponent: React.FC<ListFooterComponentProps> = ({
  reachedTheEnd,
}) => {
  return (
    <>
      {reachedTheEnd ? (
        <Box
          width={CAR_ITEM_WIDTH}
          height={CAR_ITEM_HEIGHT}
          alignItems="center"
        >
          <Text variant="smallTextMediumDark">That's all folks (☞ﾟヮﾟ)☞</Text>
        </Box>
      ) : (
        <Box
          width={CAR_ITEM_WIDTH}
          height={CAR_ITEM_HEIGHT}
          alignItems="center"
        >
          <Loading color="primary" />
        </Box>
      )}
    </>
  );
};

export default ListFooterComponent;
