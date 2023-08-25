import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import CourseHeading from "./components/CourseHeading/CourseHeading";
import Footer from "./components/Footer/Footer";
import InformationForm from "./components/InformationForm/InformationForm";
import LoggerCourse from "./components/LoggerDetails/LoggerCourse";
import LoggerDetails from "./components/LoggerDetails/LoggerDetails";
import Navbar from "./components/Navbar/Navbar";
import RegisterMessage from "./components/RegisterMessage/RegisterMessage";

const style = {
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "37px 40px",
};

const background = {
  background: "linear-gradient(135deg, #fff 0%, #d0e8eb 100%)",
};

function App() {
  const [apiData, setApiData] = useState([]);
  let [searchParams] = useSearchParams();

  const data = searchParams.get("data");
  let newData = null;

  if (data) {
    try {
      newData = JSON.parse(atob(data));
    } catch (error) {
      console.error("Error parsing newData:", error);
    }
  }

  let url = ""; // Initialize the URL

  if (newData && newData.endpoint) {
    url = `${newData.endpoint}verification/?data=${data}`;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (url) {
          const response = await axios.get(url);
          setApiData(response.data);
        }
      } catch (error) {
        console.log("erro message", error);
      }
    };

    fetchData();
  }, [data, url]);

  console.log("apiData", apiData);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <>
                <Navbar />
                <div style={background}>
                  <div style={style}>
                    {data ? (
                      <>
                        {apiData.user_status === "existing_user" ? (
                          <>
                            <LoggerCourse courses={apiData.courses} />
                            <LoggerDetails
                              login={apiData.priima_login}
                              user={apiData.user_details}
                            />
                          </>
                        ) : (
                          apiData.user_status === "new_user" && (
                            <>
                              <CourseHeading courses={apiData.courses} />
                              <InformationForm data={apiData.form_fields} />
                            </>
                          )
                        )}
                      </>
                    ) : (
                      <RegisterMessage />
                    )}
                  </div>
                </div>
                <Footer />
              </>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
