import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

const PostHeader = ({ username, avatar }) => {
  return (
    <>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"full"}
        my={2}
      >
        {/* Left Side Avatar and userName */}
        <Flex alignItems={"center"} gap={2}>
          <Avatar
            size={"sm"}
            src={avatar}
            alt={"user-profile-pic"}
          />
          <Flex fontSize={12} fontWeight={"bold"} gap={2}>
            {username}
            <Box color={"gray.500"}>• 1w</Box>
          </Flex>
        </Flex>
        {/* Right Side */}
        <Box alignItems={"center"} cursor={"pointer"}>
          <Text
            fontSize={12}
            color={"blue.500"}
            fontWeight={"bold"}
            _hover={{ color: "white" }}
            transition={"0.2s ease-in-out"}
          >
            Follow
          </Text>
        </Box>
      </Flex>
    </>
  );
};
export default PostHeader;
