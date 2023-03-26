import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import useFetchGame, { Platform } from "../../hooks/useFetchGame";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import GameHeading from "../GameHeading";
import { GameQuery } from "../Layout/Layout";
import PlatformSelector from "../PlatformSelector/PlatformSelector";
import SortSelector from "../SortSelector/SortSelector";

interface Props {
  sortOrder: string;
  gameQuery: GameQuery;
  onSelectOrder: (order: string) => void;
  onSelectPlatform: (Platform: Platform) => void;
}

const GameGrid = (props: Props) => {
  const { sortOrder, gameQuery, onSelectPlatform, onSelectOrder } = props;
  const { data: games, isLoading, error } = useFetchGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <Box px="20px" py="10px" width={{ base: "100%", sm: "100%", md: "80%" }}>
      {error && <p>{error}</p>}
      <GameHeading gameQuery={gameQuery} />
      
      <Flex py={5}>
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={onSelectPlatform}
        />

        <Box ml={3}>
          <SortSelector
            sortOrder={sortOrder}
            onSelectSortOrder={onSelectOrder}
          />
        </Box>
      </Flex>

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
