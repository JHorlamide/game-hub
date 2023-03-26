import { Heading } from "@chakra-ui/react";
import { GameQuery } from "./Layout/Layout";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { platform, genre } = gameQuery;
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return <Heading as="h1">{heading}</Heading>;
};

export default GameHeading;
