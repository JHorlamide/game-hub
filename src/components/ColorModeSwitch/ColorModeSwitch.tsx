import { HStack, Text, Switch, useColorMode } from "@chakra-ui/react";

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


export default ColorModeSwitch;
