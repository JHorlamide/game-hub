import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Genre } from "../../hooks/useFetchGenres";
import LeftPanel from "../LeftPanel/LeftPanel";
import GameGrid from "../GameGrid/GameGrid";
import { Platform } from "../../hooks/useFetchGame";

export interface GameQuery {
  genre: Genre | null;
  sortOrder: string;
  platform: Platform | null;
}

const Layout = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Flex mt="5px">
      <LeftPanel
        selectedGenre={gameQuery.genre}
        onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
      />

      <GameGrid
        sortOrder={gameQuery.sortOrder}
        gameQuery={gameQuery}
        onSelectOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
        onSelectPlatform={(platform) =>
          setGameQuery({ ...gameQuery, platform })
        }
      />
    </Flex>
  );
};

export default Layout;
