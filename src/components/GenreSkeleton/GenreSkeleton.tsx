import {
  SkeletonCircle,
  SkeletonText,
  HStack,
} from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <HStack spacing={2}>
      <SkeletonCircle size="10" />
      <SkeletonText />
    </HStack>
  );
};

export default GenreSkeleton;
