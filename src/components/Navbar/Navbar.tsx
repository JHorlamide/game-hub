import { Image, HStack, Show, Box } from "@chakra-ui/react";
import Logo from "../../assets/logo.webp";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import SearchInput from "../SearchInput/SearchInput";

interface Props {
  onSetSearchInput: (searchText: string) => void;
}

const Navbar = ({ onSetSearchInput }: Props) => {
  return (
    <HStack
      spacing={{ base: 10, md: 4 }}
      py={{ base: "2", md: "4" }}
      px={{ base: "2", md: "4" }}
      justify={{ base: "space-between", md: "space-between" }}
      align={"center"}
    >
      <Image
        flexShrink={0}
        objectFit={"cover"}
        src={Logo}
        boxSize="60px"
        loading="lazy"
      />

      <Show above="md">
        <SearchInput onSetSearchInput={onSetSearchInput} />
      </Show>

      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
