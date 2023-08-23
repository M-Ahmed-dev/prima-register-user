import { Box, Text, theme } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React from "react";

const RegisterMessage = () => {
  const theme = useTheme();
  return (
    <Box>
      <Text sx={theme.fonts.secondary} fontSize="24px">
        Oops! You dont have Access, please register to Priima.
      </Text>
    </Box>
  );
};

export default RegisterMessage;
