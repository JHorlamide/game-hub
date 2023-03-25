import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Genre } from "../../hooks/useFetchGenres";
import LeftPanel from "../LeftPanel/LeftPanel";
import GameGrid from "../GameGrid/GameGrid";

const Layout = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Flex mt="5px">
      <LeftPanel
        selectedGenre={selectedGenre}
        onSelectGenre={(genre) => setSelectedGenre(genre)}
      />
      <GameGrid selectedGenre={selectedGenre} />
    </Flex>
  );
};

export default Layout;
