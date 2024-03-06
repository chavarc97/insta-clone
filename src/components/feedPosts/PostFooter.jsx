import {
  Box,
  Flex,
  InputGroup,
  InputRightElement,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";

const PostFooter = ({username}) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <Box mb={4} mt={'auto'}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
        <Box onClick={handleLike} cursor="pointer" fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor="pointer" fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} Likes
      </Text>
      <Text fontWeight={700} fontSize={"sm"}>
        {username}{" "}
        <Text as={"span"} fontWeight={400}>
          Coment here
        </Text>
      </Text>
      <Text fontSize={"sm"} color={"grey"}>
        View all 100 comments
      </Text>
      <Flex
        alignItems={"center"}
        gap={2}
        justifyContent={"space-between"}
        w={"full"}
      >
        <InputGroup>
          <Input
            variant={"flushed"}
            placeholder={'Add a comment...'}
            fontSize={14}
          ></Input>
          <InputRightElement width="4.5rem">
            <Button
             fontSize={14}
             color={'blue.500'}
             fontWeight={600}
             cursor={'pointer'}
             _hover={{color: 'white'}}
             bg={'transparent'}
             ml={10}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};
export default PostFooter;
