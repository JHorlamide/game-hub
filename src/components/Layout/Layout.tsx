import { Flex } from "@chakra-ui/react";
import LeftPanel from "../LeftPanel/LeftPanel";
import RightPanel from "../RightPanel/RightPanel";

const Layout = () => {
  return (
    <Flex mt="5px">
      
      <LeftPanel
        width={{ md: "20%" }}
        display={{ base: "none", md: "block" }}
      />
      <RightPanel width={{ base: "100%", sm: "100%", md: "80%" }} />
    </Flex>
  );
};

export default Layout;
