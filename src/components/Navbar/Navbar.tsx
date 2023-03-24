import {
  Input,
  InputGroup,
  InputLeftElement,
  Image,
  HStack,
  Switch,
  Text,
  Show,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import Logo from "../../assets/logo.webp";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack spacing={1} align="center">
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        width={"45px"}
        size={"md"}
        colorScheme="green"
      />
      <Text fontSize="15px" fontWeight="medium" flexShrink={0}>
        Dark Mode
      </Text>
    </HStack>
  );
};

const SearchInput = () => {
  return (
    <InputGroup width={"80%"} alignItems="center">
      <InputLeftElement
        paddingTop={"5px"}
        pointerEvents={"none"}
        children={<BsSearch color="gray.3000" />}
      />

      <Input
        _placeholder={{
          opacity: "0.6",
          color: "gray.200",
          fontSize: "15px",
        }}
        placeholder="Search games"
        height="45px"
        bg={"gray.800"}
        border="none"
        focusBorderColor="none"
        borderRadius={"20px"}
      />
    </InputGroup>
  );
};

const Navbar = () => {
  return (
    <HStack
      spacing={{ base: 10, md: 4 }}
      py={{ base: "2", md: "4" }}
      px={{ base: "2", md: "4" }}
      justify={{ base: "space-between", md: "space-evenly" }}
      align={"center"}
    >
      <Box flexShrink={0}>
        <Image objectFit={"cover"} src={Logo} boxSize="60px" loading="lazy" />
      </Box>

      <Show above="md">
        <SearchInput />
      </Show>

      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
