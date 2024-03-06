import { Container, Flex, Box } from "@chakra-ui/react";
import FeedPosts from "../../components/feedPosts/FeedPosts";
import SugestedUseers from "../../components/SugestedUsers/SugestedUsers";

const HomePage = () => {
  return (
    <>
      <Container maxW={"Container.lg"}>
        <Flex gap={20}>
          <Box flex={2} py={10} ml={10} >
            <FeedPosts/>
          </Box>
          <Box flex={3} mr={20} display={{ base: "none", lg: "block" }} maxW={"300px"}>
            <SugestedUseers/>
          </Box>
        </Flex>
      </Container>
    </>
  );
};
export default HomePage;
