import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Box backgroundColor=" #fff" padding="20px">
      <Box display="flex" alignItems="center" maxWidth="1000px" margin="auto">
        <Text
          color="#303030"
          fontSize="24px"
          fontWeight="700"
          textTransform="uppercase"
        >
          Logo
        </Text>
      </Box>
    </Box>
  );
};

export default Navbar;
