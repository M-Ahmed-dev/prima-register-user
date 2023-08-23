import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import CourseHeading from "./components/CourseHeading/CourseHeading";
import Footer from "./components/Footer/Footer";
import InformationForm from "./components/InformationForm/InformationForm";
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
  height: "100vh",
};

function App() {
  const [apiData, setApiData] = useState([]);
  let [searchParams] = useSearchParams();

  const data = searchParams.get("data");
  // const encodedData =
  //   "eyJvcmRlcl9pZCI6ODMyNiwiaXRlbV9pZCI6MjYsInZfaWQiOjEwMzgsImVtYWlsIjoiMXNhbXBsZUBibGsuY20iLCJlbmRwb2ludCI6Imh0dHBzOlwvXC9tYXhlbml1cy5hZ2VuY3lcL3N0YWdpbmdcL29iZXR1cyJ9";

  const url = `https://maxenius.agency/staging/obetus/wp-json/priima_user/verification?data=${data}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setApiData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url]);

  console.log(apiData);

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
                    {/* Conditional rendering */}
                    {data ? (
                      <>
                        <CourseHeading courses={apiData.courses} />
                        <InformationForm data={apiData.form_fields} />
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
