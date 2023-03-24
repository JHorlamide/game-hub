import { Avatar, Flex, HStack, Stack, Text, VStack } from "@chakra-ui/react";

const genres = ["Action", "Indie", "Puzzle", "Simulation"];

interface PanelItemsProps {
  name: string;
}

const PanelItems = ({ name, ...rest }: PanelItemsProps) => {
  return (
    <HStack
      spacing={3}
      _hover={{
        width: "100%",
        cursor: "pointer",
      }}
      {...rest}
      onClick={() => console.log(name)}
    >
      <Avatar src={name} borderRadius="8px" width={8} height={8} />
      <Text fontSize={"15px"} fontWeight="medium">
        {name}
      </Text>
    </HStack>
  );
};

const LeftPanel = ({ ...rest }) => {
  return (
    <Flex
      bg="gray.700"
      px={"5"}
      flex="1"
      overflow={"auto"}
      {...rest}
    >
      <VStack spacing={2} alignItems="start">
        <Text as={"h1"} fontWeight="bold" fontSize={"25px"}>
          Genres
        </Text>

        <Stack spacing={4}>
          {genres.map((genre, idx) => (
            <PanelItems key={idx} name={genre} />
          ))}
        </Stack>
      </VStack>
    </Flex>
  );
};

export default LeftPanel;
