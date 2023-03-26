import {
  Flex,
  Stack,
  VStack,
  List,
  ListItem,
  Image,
  HStack,
  Button,
  Heading,
} from "@chakra-ui/react";
import useFetchGenre, { Genre } from "../../hooks/useFetchGenres";
import getCroppedImage from "../../services/image-url";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const selectedButtonStyle = (condition: boolean) => {
  if (condition === true) {
    return {
      bg: "gray.500",
      fontWeight: "normal",
      borderRadius: "10px",
      px: "8px",
      py: "4px",
    };
  }

  return null;
};

const LeftPanel = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genres, isLoading } = useFetchGenre();

  return (
    <Flex
      px={"5"}
      flex="1"
      overflow={"auto"}
      width={{ md: "20%" }}
      display={{ base: "none", md: "block" }}
    >
      <VStack spacing={6} alignItems="start">
        <Heading as={"h1"} fontWeight="bold" fontSize={"25px"}>
          Genres
        </Heading>

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
                    objectFit="cover"
                    boxSize="32px"
                    src={getCroppedImage(genre.image_background)}
                    borderRadius="8px"
                  />

                  <Button
                    {...selectedButtonStyle(genre.id === selectedGenre?.id)}
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
