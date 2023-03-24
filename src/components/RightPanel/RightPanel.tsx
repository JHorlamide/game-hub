import { Box } from "@chakra-ui/react";
import React from "react";
import GameGrid from "../GameGrid/GameGrid";

const RightPanel = ({ ...rest }) => {
  return (
    <Box {...rest} overflow="auto">
      <GameGrid />
    </Box>
  );
};

export default RightPanel;
