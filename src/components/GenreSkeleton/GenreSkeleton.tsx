import {
  SkeletonCircle,
  SkeletonText,
  VStack,
} from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <VStack>
      <SkeletonCircle size="10" />
      <SkeletonText />
    </VStack>
  );
};

export default GenreSkeleton;
