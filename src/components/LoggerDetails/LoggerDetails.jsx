import { Box, Button, Link, Text, useTheme } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const LoggerDetails = ({ user, login }) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  const gridItems = {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  };

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  console.log("userDetails:", user);

  return (
    <>
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

        {loading ? (
          <Text>Loading User Details</Text>
        ) : (
          <Box display="grid" gridTemplateColumns="auto auto" mt="64px">
            {/* {Object.keys(user).map((details, index) => ( */}
            <>
              <Box sx={gridItems}>
                <Box>
                  <Text color={theme.colors.primary} fontWeight="500">
                    {user.username.label}
                  </Text>
                  <Text color={theme.colors.primary} fontWeight="300">
                    {user.username.value}
                  </Text>
                </Box>
              </Box>

              <Box sx={gridItems}>
                <Box>
                  {user.basic.map((item, i) => (
                    <React.Fragment key={`${i + 1} ${item.value}`}>
                      <Text sx={theme.fonts.secondary}>{item.label}</Text>
                      <Text sx={theme.fonts.secondary}>{item.value}</Text>
                    </React.Fragment>
                  ))}
                </Box>

                <Box>
                  {user.additional.map((item, i) => (
                    <React.Fragment key={`${i + 1} ${item.value}`}>
                      <Text sx={theme.fonts.secondary}>{item.label}</Text>
                      <Text sx={theme.fonts.secondary}>{item.value}</Text>
                    </React.Fragment>
                  ))}
                </Box>
              </Box>
            </>
            {/* ))} */}
          </Box>
        )}

        <Button
          mt="86px"
          display="flex"
          width="200px"
          color="#FFF"
          background={theme.colors.primary}
        >
          <Link href={login}>Login in to Priima</Link>
        </Button>
      </Box>
    </>
  );
};

export default LoggerDetails;
