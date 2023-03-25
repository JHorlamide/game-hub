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

const useFetchGame = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useDataFetch<Game>(
  "/games",
  { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
  [selectedGenre?.id, selectedPlatform?.id]
);

export default useFetchGame;
