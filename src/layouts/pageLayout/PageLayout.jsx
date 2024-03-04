import { Box, Flex } from "@chakra-ui/react";
import SideBar from "../../components/sideBar/SideBar";
import { useLocation } from "react-router-dom";

/* 
instead of adding the Sidebar component to every page, we can add it only once to the PageLayout 
component and wrap the children with it. This way, we can have a sidebar on every page except the AuthPage.
 */
const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <>
      <Flex>
        {pathname !== "/auth" ? (
          <Box w={{ base: "70px", md: "240px" }}>
            <SideBar />
          </Box>
        ) : null}

        <Box
          flex={1}
          w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}
          mx={"auto"}
        >
          {children}
        </Box>
      </Flex>
    </>
  );
};
export default PageLayout;
