import { Box, SimpleGrid } from "@chakra-ui/react";
import useFetchGame from "../../hooks/useFetchGame";
import { Genre } from "../../hooks/useFetchGenres";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import PlatformSelector from "../PlatformSelector/PlatformSelector";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data: games, isLoading, error } = useFetchGame(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <Box px="20px" py="10px" width={{ base: "100%", sm: "100%", md: "80%" }}>
      {error && <p>{error}</p>}
      <PlatformSelector />

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing={5} mt={2}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameGrid;
