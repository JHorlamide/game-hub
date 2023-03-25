import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useFetchPlatforms from "../../hooks/useFetchPlatforms";

const PlatformSelector = () => {
  const { data: platforms, isLoading, error } = useFetchPlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {platforms.map(({ id, name }) => (
          <MenuItem key={id}>{name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
