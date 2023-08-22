import { Box, Text, useTheme } from "@chakra-ui/react";
import React from "react";

const CourseHeading = () => {
  const theme = useTheme();
  return (
    <Box>
      <Text sx={theme.fonts.secondary} fontSize="24px">
        Customizable default message from priima settings!
      </Text>

      <Box mt="10px">
        <Text sx={theme.fonts.secondary}>You have been added to courses:</Text>
        <Text sx={theme.fonts.primary}>
          Course name (link to course description)
        </Text>
        <Text sx={theme.fonts.primary}>
          Course name 2 (link to course description)
        </Text>
      </Box>
    </Box>
  );
};

export default CourseHeading;
