import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Game } from "../../hooks/useFetchGame";
import getCroppedImage from "../../services/image-url";
import PlatformIconList from "../PlatformIcon/PlatformIconList";
import GameCardContainer from "../GameCardContainer";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <Card>
        <Image
          borderRadius={"md"}
          src={getCroppedImage(game.background_image)}
          width="auto"
          h="auto"
        />
        <CardBody>
          <Stack>
            <Heading fontSize={"2xl"}>{game.name}</Heading>
            <PlatformIconList
              platforms={game.parent_platforms.map(
                (platform) => platform.platform
              )}
              score={game.metacritic}
            />
          </Stack>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
