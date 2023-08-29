import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import RegisterMessage from "./components/RegisterMessage/RegisterMessage";
import RegisterUser from "./components/RegisterUser/RegisterUser";

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
  const [newResponse, setNewResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  let [searchParams] = useSearchParams();
  const data = searchParams.get("data");
  let newData = null;

  if (data) {
    try {
      newData = JSON.parse(atob(data));
      console.log("newData", newData.email);
    } catch (error) {
      console.error("Error parsing newData:", error);
    }
  }

  let url = "";
  let postUrl = "";

  if (newData && newData.endpoint) {
    url = `${newData.endpoint}verification/?data=${data}`;
    postUrl = `${newData.endpoint}create/?key=${data}`;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (url) {
          const response = await axios.get(url);

          const updatedData = {
            ...response.data,
            form_fields: {
              ...response.data.form_fields,
              basic: {
                ...response.data.form_fields.basic,
                email: {
                  id: newData.email,
                  name: "Email",
                  restricted: "1",
                  definition: {
                    type: "text",
                    options: "",
                  },
                  visibility: "on",
                },
              },
            },
          };
          setApiData(updatedData);
        }
      } catch (error) {
        console.log("error message", error);
      }
    };
    fetchData();
  }, [data, newData?.email, url]);

  //

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log("newResponse", response.data);
        setNewResponse(response.data);

        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
      });
  }, [url]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <div style={background}>
                <div style={style}>
                  {loading ? (
                    <div>Loading.....</div>
                  ) : data ? (
                    <RegisterUser
                      apiData={apiData}
                      newData={newData}
                      postUrl={postUrl}
                      newResponse={newResponse}
                    />
                  ) : (
                    <RegisterMessage />
                  )}
                </div>
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
