import { Box, FormControl, FormLabel, Input, useTheme } from "@chakra-ui/react";
import React from "react";

const formFields = [
  { label: "Last Name: *", placeholder: "Last Name" },
  { label: "Phone", placeholder: "Email" },
  { label: "Title" },
];

const SecondForm = () => {
  const theme = useTheme();

  return (
    <Box display="flex" flexDirection="column" gap="25px">
      {formFields.map((field, index) => (
        <FormControl key={index} marginTop={index !== 0 ? "10px" : 0}>
          <FormLabel sx={theme.fonts.secondary}>{field.label}</FormLabel>
          <Input
            background="#fff"
            width="313px"
            height="25px"
            placeholder={field.placeholder}
            boxShadow="0px 0px 2px 0px rgba(33, 91, 124, 0.50) inset"
            size="sm"
            borderRadius="5px"
            sx={{
              "&::placeholder": {
                fontSize: "13px",
              },
            }}
          />
        </FormControl>
      ))}
    </Box>
  );
};

export default SecondForm;
