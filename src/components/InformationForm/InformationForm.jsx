import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useTheme,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const InformationForm = ({ data }) => {
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
              maxWidth="100%"
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

  //

  const handleSubmit = async () => {
    const endpoint =
      "https://maxenius.agency/staging/obetus/wp-json/priima_user/create?key=eyJvcmRlcl9pZCI6ODk4NSwiaXRlbV9pZCI6MzIsInZfaWQiOjEwMzgsImVtYWlsIjoiMnNhbXBsZUBibGsuY2MiLCJlbmRwb2ludCI6Imh0dHBzOlwvXC9tYXhlbml1cy5hZ2VuY3lcL3N0YWdpbmdcL29iZXR1c1wvd3AtanNvblwvcHJpaW1hX3VzZXJcLyJ9";

    const requestData = {
      fields_data: {
        basic: {
          email: data.basic.find((item) => item.label === "User Email").value,
          first_name: data.basic.find((item) => item.label === "User Name")
            .value,
          phone: data.basic.find((item) => item.label === "User Phone").value,
        },
        additional: {
          // Populate additional fields here
          // Example:
          // "67453": "samsdfk ",
          // "41522": "sdfg sfxcc",
          // "26288": "sdfr sfxcc"
        },
      },
    };

    try {
      const response = await axios.post(endpoint, requestData);
      console.log("Response:", response.data); // You can handle the response here
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box
      mt="59px"
      borderRadius="10px"
      background="#E6F2F3"
      boxShadow="0px 2px 5px 0px rgba(33, 91, 124, 0.15)"
      display="flex"
      padding="52px 0px 90px"
    >
      <Box maxWidth="85%" margin="auto">
        <Box>
          <Text fontSize="20px" sx={theme.fonts.primary}>
            Information:
          </Text>
        </Box>
        <Box
          mt="64px"
          display="grid"
          gridTemplateColumns="auto auto"
          // gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" /* Responsive grid */
          alignItems="baseline"
          gap="25px"
          sx={{
            "@media screen and (max-width: 768px)": {
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
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
    </Box>
  );
};

export default InformationForm;
