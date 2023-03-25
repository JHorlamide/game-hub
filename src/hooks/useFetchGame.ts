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

const useFetchGame = (selectedGenre: Genre | null) => useDataFetch<Game>(
  "/games",
  { params: { genres: selectedGenre?.id } },
  [selectedGenre?.id]
);

export default useFetchGame;
