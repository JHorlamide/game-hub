import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import useFetchGame from "../../hooks/useFetchGame";
import GameCard from "../GameCard/GameCard";

const GameGrid = () => {
  const { games, error, loading } = useFetchGame();

  return (
    <Box px="20px" py="10px">
      {loading && <p>Loading games...</p>}
      {error && <p>{error}</p>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameGrid;
