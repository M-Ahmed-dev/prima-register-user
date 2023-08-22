import { Box, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import InputForm from "./InputForm";

const InformationForm = () => {
  const theme = useTheme();
  return (
    <Box
      mt="59px"
      borderRadius="10px"
      height="598px"
      background="#E6F2F3"
      boxShadow=" 0px 2px 5px 0px rgba(33, 91, 124, 0.15)"
      padding="50px 130px"
    >
      <Box>
        <Text fontSize="20px" sx={theme.fonts.primary}>
          Information:
        </Text>
      </Box>

      <InputForm />
    </Box>
  );
};

export default InformationForm;
