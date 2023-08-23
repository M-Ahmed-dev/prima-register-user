import { Box, Button, Text, useTheme } from "@chakra-ui/react";
import React from "react";

const LoggerMessage = () => {
  const theme = useTheme();

  const gridItems = {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  };

  return (
    <Box
      mt="59px"
      borderRadius="10px"
      height="598px"
      background="#E6F2F3"
      boxShadow="0px 2px 5px 0px rgba(33, 91, 124, 0.15)"
      padding="50px 130px"
    >
      <Box>
        <Text fontSize="20px" sx={theme.fonts.primary}>
          Please Register to View this!
        </Text>
      </Box>
    </Box>
  );
};

export default LoggerMessage;
