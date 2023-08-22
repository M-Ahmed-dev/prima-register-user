import { TriangleDownIcon } from "@chakra-ui/icons";
import { Box, Icon, useTheme } from "@chakra-ui/react";
import React, { useState } from "react";

const PhoneSelector = () => {
  const theme = useTheme();

  const [open, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!open);
  };
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="5px"
        width="58px"
        background="#FFF"
        fontSize="13px"
        padding="1px 7px"
        color={theme.colors.primary}
        cursor="pointer"
      >
        +348
        <Icon as={TriangleDownIcon} boxSize={2} />
      </Box>
      {open && (
        <Box
          position="absolute"
          top="100%"
          left="0"
          background="white"
          boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2)"
          borderRadius="5px"
          padding="5px"
        >
          <Box>+348</Box>
          <Box>+347</Box>
          <Box>+349</Box>
        </Box>
      )}
    </>
  );
};

export default PhoneSelector;
