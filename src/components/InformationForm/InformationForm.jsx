import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useTheme,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const InformationForm = ({ data }) => {
  console.log("formData:", data);

  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  const renderFields = (fields) => {
    return Object.keys(fields).map((fieldKey) => {
      const field = fields[fieldKey];
      const isVisible =
        field.visibility === "on" || field.visibility === "optional";

      const isRequired = field.visibility === "on";

      if (isVisible) {
        return (
          <FormControl
            key={fieldKey}
            marginTop={fieldKey !== "first_name" ? "10px" : 0}
          >
            <FormLabel sx={theme.fonts.secondary}>
              {field.name}{" "}
              {isRequired && (
                <Text as="span" sx={theme.fonts.secondary}>
                  *
                </Text>
              )}
            </FormLabel>
            <Input
              background="#fff"
              width="313px"
              height="25px"
              placeholder={field.name}
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
        );
      }

      return null;
    });
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
      <Box mt="64px" display="grid" gap="25px" gridTemplateColumns="auto auto">
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            {renderFields(data.basic)}
            {renderFields(data.additional)}
          </>
        )}
      </Box>

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

export default InformationForm;
