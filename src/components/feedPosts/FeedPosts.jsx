import {
  Container,
  VStack,
  SkeletonCircle,
  Flex,
  Skeleton,
  Box
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((item, index) => (
          <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={4} alignItems='center'>
              <SkeletonCircle size="10" />
              <VStack gap="2" alignItems="flex-start">
                <Skeleton height="20px" w="200px"/>
              </VStack>
            </Flex>
            <Skeleton w="full">
              <Box h="500px">contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <FeedPost username="elaine" img={"/img1.png"} avatar={"/img1.png"} />
          <FeedPost username="janedoe" img={"/img2.png"} avatar="/img2.png" />
          <FeedPost username="josh" img={"/img3.png"} avatar={"/img3.png"} />
          <FeedPost username="kevin" img={"/img4.png"} avatar={"/img4.png"} />
        </>
      )}
    </Container>
  );
};
export default FeedPosts;
