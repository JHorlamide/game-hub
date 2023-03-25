import { GameQuery } from "../components/Layout/Layout";
import useDataFetch from "./useDataFetch";
import { Genre } from "./useFetchGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useFetchGame = (gameQuery: GameQuery) => useDataFetch<Game>(
  "/games",
  {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder
    }
  },
  [gameQuery]
);

export default useFetchGame;
