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

const InformationForm = ({ formData, email, postUrl }) => {
  const formStyles = {
    display: "grid",
    gridTemplateColumns: "auto auto",
    alignItems: "baseline",
    columnGap: "25px",
    "@media screen and (width: 768px)": {
      display: "flex",
      flexDirection: "column",
    },
  };

  const [formFields, setFormFields] = useState({});
  const [responseData, setResponseData] = useState(null); // Add this line
  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (formData) {
      setLoading(false);
      setFormFields((prev) => ({
        ...prev,
        fields_data: {
          ...prev.fields_data,
          basic: {
            ...prev.basic,
            email: email,
          },
        },
      }));
    }
  }, [email, formData]);

  const submitHandler = (e) => {
    e.preventDefault();
    const parsedData = JSON.stringify(formFields);
    console.log("json stringfy data", parsedData);

    axios
      .post(postUrl, parsedData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setResponseData(response.data); // Add this line
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("formFields", formFields);

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
        <Box mt="64px">
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            <form sx={formStyles} onSubmit={submitHandler}>
              {Object.keys(formData.basic).map((fieldKey) => {
                return (
                  <FormControl
                    key={fieldKey}
                    marginTop={fieldKey !== "first_name" ? "10px" : 0}
                  >
                    <FormLabel sx={theme.fonts.secondary}>
                      {formData.basic[fieldKey].name}
                    </FormLabel>
                    <Input
                      onChange={(e) => {
                        const value = e.target.value;
                        setFormFields((prev) => ({
                          ...prev,
                          fields_data: {
                            ...prev.fields_data,
                            basic: {
                              ...prev.fields_data.basic,
                              [fieldKey]: value,
                              email: email,
                            },
                          },
                        }));
                      }}
                      background="#fff"
                      maxWidth="100%"
                      width="313px"
                      height="25px"
                      placeholder={formData.basic[fieldKey].id}
                      disabled={formData.basic[fieldKey].name === "Email"} // Disable based on the condition
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
              })}

              {Object.keys(formData.additional).map((fieldKey) => {
                return (
                  <FormControl
                    key={fieldKey}
                    marginTop={fieldKey !== "first_name" ? "10px" : 0}
                  >
                    <FormLabel sx={theme.fonts.secondary}>
                      {formData.additional[fieldKey].name}
                    </FormLabel>
                    <Input
                      background="#fff"
                      maxWidth="100%"
                      width="313px"
                      height="25px"
                      placeholder="Field Name"
                      boxShadow="0px 0px 2px 0px rgba(33, 91, 124, 0.50) inset"
                      size="sm"
                      borderRadius="5px"
                      sx={{
                        "&::placeholder": {
                          fontSize: "13px",
                        },
                      }}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFormFields((prev) => ({
                          ...prev,
                          fields_data: {
                            ...prev.fields_data,
                            additional: {
                              ...prev.fields_data.additional,
                              [fieldKey]: value,
                            },
                          },
                        }));
                      }}
                    />
                  </FormControl>
                );
              })}

              <Button
                mt="86px"
                display="flex"
                width="200px"
                color="#FFF"
                type="submit"
                background={theme.colors.primary}
              >
                Confirm
              </Button>
            </form>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default InformationForm;
