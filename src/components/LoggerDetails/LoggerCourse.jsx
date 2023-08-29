import { Box, Link, Text, useTheme } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const LoggerCourse = ({ courses }) => {
  console.log("courses link", courses);
  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (courses) {
      setLoading(false);
    }
  }, [courses]);

  return (
    <Box>
      <Text sx={theme.fonts.secondary} fontSize="24px">
        Customizable default message from priima settings!
      </Text>

      <Box mt="37px">
        <Text sx={theme.fonts.secondary}>You have been added to courses:</Text>

        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            {Object.keys(courses).map((course) => (
              <Link
                target="_blank" // Open link in a new tab
                href={courses[course]?.course_link}
              >
                <Text key={course} sx={theme.fonts.primary}>
                  {courses[course]?.name} ({courses[course]?.description})
                </Text>
              </Link>
            ))}
          </>
        )}
      </Box>
    </Box>
  );
};

export default LoggerCourse;
