import { Card, CardBody, Heading, Image, Stack } from "@chakra-ui/react";
import { Game } from "../../hooks/useFetchGame";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card maxW="md" borderRadius={10} overflow="hidden">
      <Image borderRadius={"md"} src={game.background_image} width="auto" h="auto"/>
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
