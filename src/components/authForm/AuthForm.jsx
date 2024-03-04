import {
  Box,
  VStack,
  Image,
  Input,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  const handleAuth = () => {
    if (!inputs.email || !inputs.password) {
      alert("Please fill in all fields");
      return
    }
    navigate("/");
  };

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <>
      <Box border={"1px solid grey"} borderRadius={4} padding={5}>
        <VStack>
          <Image src="/logo.png" h={50} cursor={"pointer"} align={"logo"} />
          <Input
            placeholder="Email"
            fontSize={14}
            type="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <Input
            placeholder="Pasword"
            fontSize={14}
            type="password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
          // If the user is not logged in, show the confirm password input
          {!isLogin ? (
            <Input
              placeholder="Confirm password"
              fontSize={14}
              type="password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          ) : null}
          {/* Action Button */}
          <Button
            w={"full"}
            colorScheme={"blue"}
            size={"sm"}
            fontSize={14}
            onClick={handleAuth}
          >
            {isLogin ? "Log in" : "Sign up"}
          </Button>
          {/* -------------------OR------------------- */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
        </VStack>
      </Box>

      {/* switch between login or sign up */}
      <Box border={"1px solid grey"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default AuthForm;
