import { GameQuery } from "../components/Layout/Layout";
import useDataFetch from "./useDataFetch";

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
  rating_top: number;
}

const useFetchGame = (gameQuery: GameQuery) => useDataFetch<Game>(
  "/games",
  {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }
  },
  [gameQuery]
);

export default useFetchGame;
