import {
  FaWind,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Badge, HStack, Icon, Flex } from "@chakra-ui/react";
import { Platform } from "../../hooks/useFetchGame";
import { IconType } from "react-icons";
import CriticScore from "../CriticScore/CriticScore";

interface Props {
  platforms: Platform[];
  score: number;
}

const PlatformIconList = ({ platforms, score }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWind,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <Flex justify={"space-between"}>
      <HStack spacing={2} my={2}>
        {platforms.map((platform) => (
          <Icon as={iconMap[platform.slug]} color="gray.500" />
        ))}
      </HStack>

      <CriticScore score={score} />
    </Flex>
  );
};

export default PlatformIconList;
