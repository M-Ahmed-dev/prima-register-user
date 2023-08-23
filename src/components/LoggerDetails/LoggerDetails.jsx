import { Box, Button, Text, useTheme } from "@chakra-ui/react";
import React from "react";

const LoggerDetails = () => {
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
          Information:
        </Text>
      </Box>

      <Box display="grid" gridTemplateColumns="auto auto" mt="64px">
        <Box sx={gridItems}>
          <Box>
            <Text color={theme.colors.primary} fontWeight="500">
              Username:
            </Text>
            <Text color={theme.colors.primary} fontWeight="300">
              johndoe94
            </Text>
          </Box>
          <Box>
            <Text color={theme.colors.primary} fontWeight="500">
              Password:
            </Text>
            <Text color={theme.colors.primary} fontWeight="300">
              3fg3fhkf93
            </Text>
          </Box>
        </Box>

        <Box sx={gridItems}>
          <Box>
            <Text sx={theme.fonts.secondary}>John Doe</Text>
            <Text sx={theme.fonts.secondary}>john.doe@example.com</Text>
            <Text sx={theme.fonts.secondary}>+358 401234567</Text>
          </Box>
          <Box>
            <Text sx={theme.fonts.secondary}>webshop_user_ID</Text>
            <Text sx={theme.fonts.secondary}>Title</Text>
          </Box>
        </Box>
      </Box>

      <Button
        mt="86px"
        display="flex"
        width="200px"
        color="#FFF"
        background={theme.colors.primary}
      >
        Login in to Priima
      </Button>
    </Box>
  );
};

export default LoggerDetails;
