import { Flex } from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { Genre } from "../../hooks/useFetchGenres";
import LeftPanel from "../LeftPanel/LeftPanel";
import GameGrid from "../GameGrid/GameGrid";
import { Platform } from "../../hooks/useFetchGame";
import Navbar from "../Navbar/Navbar";

export interface GameQuery {
  genre: Genre | null;
  sortOrder: string;
  searchText: string;
  platform: Platform | null;
}

const Layout = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Fragment>
      <Navbar
        onSetSearchInput={(searchText) =>
          setGameQuery({ ...gameQuery, searchText })
        }
      />

      <Flex mt="5px">
        <LeftPanel
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />

        <GameGrid
          sortOrder={gameQuery.sortOrder}
          gameQuery={gameQuery}
          onSelectOrder={(sortOrder) =>
            setGameQuery({ ...gameQuery, sortOrder })
          }
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        />
      </Flex>
    </Fragment>
  );
};

export default Layout;
