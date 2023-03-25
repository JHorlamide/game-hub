import { Box, Flex, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { Genre } from "../../hooks/useFetchGenres";
import LeftPanel from "../LeftPanel/LeftPanel";
import GameGrid from "../GameGrid/GameGrid";
import PlatformSelector from "../PlatformSelector/PlatformSelector";
import { Platform } from "../../hooks/useFetchGame";

const Layout = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Flex mt="5px">
      <LeftPanel
        selectedGenre={selectedGenre}
        onSelectGenre={(genre) => setSelectedGenre(genre)}
      />

      <GameGrid
        selectedPlatform={selectedPlatform}
        selectedGenre={selectedGenre}
        onSelectPlatform={(Platform) => setSelectedPlatform(Platform)}
      />
    </Flex>
  );
};

export default Layout;
