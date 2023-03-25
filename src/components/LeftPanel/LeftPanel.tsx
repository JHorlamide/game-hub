import {
  Flex,
  Stack,
  Text,
  VStack,
  List,
  ListItem,
  Image,
  HStack,
  Button,
} from "@chakra-ui/react";
import useFetchGenre, { Genre } from "../../hooks/useFetchGenres";
import getCroppedImage from "../../services/image-url";
import GenreSkeleton from "../GenreSkeleton/GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const LeftPanel = ({ onSelectGenre }: Props) => {
  const { data: genres, isLoading } = useFetchGenre();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Flex
      px={"5"}
      flex="1"
      overflow={"auto"}
      width={{ md: "20%" }}
      display={{ base: "none", md: "block" }}
    >
      {isLoading &&
        skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />)}
      <VStack spacing={6} alignItems="start">
        <Text as={"h1"} fontWeight="bold" fontSize={"25px"}>
          Genres
        </Text>

        <Stack spacing={4}>
          <List spacing={4}>
            {genres.map((genre) => (
              <ListItem key={genre.id}>
                <HStack
                  spacing={3}
                  _hover={{
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    boxSize="32px"
                    src={getCroppedImage(genre.image_background)}
                    borderRadius="8px"
                  />
                  <Button
                    fontSize="lg"
                    onClick={() => onSelectGenre(genre)}
                    variant="link"
                  >
                    {genre.name}
                  </Button>
                </HStack>
              </ListItem>
            ))}
          </List>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default LeftPanel;
