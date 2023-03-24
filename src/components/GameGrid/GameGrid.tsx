import { Box, Grid, GridItem, SimpleGrid, Skeleton } from "@chakra-ui/react";
import useFetchGame from "../../hooks/useFetchGame";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";

const GameGrid = () => {
  const { games, error, loading } = useFetchGame();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <Box px="20px" py="10px">
      {error && <p>{error}</p>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing={5}>
        {loading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameGrid;
