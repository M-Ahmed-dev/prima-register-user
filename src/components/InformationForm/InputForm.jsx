import { Box, Button, Flex, useTheme } from "@chakra-ui/react";
import React from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";

const InputForm = () => {
  const theme = useTheme();

  return (
    <Box mt="64px">
      <Flex alignItems="center" justifyContent="space-between">
        <FirstForm />
        <SecondForm />
      </Flex>

      <Button
        mt="86px"
        display="flex"
        width="200px"
        color="#FFF"
        background={theme.colors.primary}
      >
        Confirm
      </Button>
    </Box>
  );
};

export default InputForm;
