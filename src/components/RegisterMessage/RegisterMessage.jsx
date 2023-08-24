import { Box, Text, useTheme } from "@chakra-ui/react";
import React from "react";

const RegisterMessage = () => {
  const theme = useTheme();
  return (
    <Box>
      <Text sx={theme.fonts.secondary} fontSize="30px">
        Oops! You dont have Access, please register to Priima.
      </Text>
    </Box>
  );
};

export default RegisterMessage;
