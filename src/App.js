import axios from "axios";
import React, { useEffect, useState } from "react";
import CourseHeading from "./components/CourseHeading/CourseHeading";
import Footer from "./components/Footer/Footer";
import InformationForm from "./components/InformationForm/InformationForm";
import Navbar from "./components/Navbar/Navbar";

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

  const encodedData =
    "eyJvcmRlcl9pZCI6ODMyNywiaXRlbV9pZCI6MjgsInZfaWQiOjEwMzgsImVtYWlsIjoiMXNhbXBsZUBibGsuZW0iLCJlbmRwb2ludCI6Imh0dHBzOlwvXC9tYXhlbml1cy5hZ2VuY3lcL3N0YWdpbmdcL29iZXR1cyJ9";
  const decodedData = JSON.parse(atob(encodedData));
  const url = `${decodedData.endpoint}/wp-json/priima_user/verification?data=${encodedData}`;

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
  }, []);

  console.log(apiData);

  return (
    <>
      <Navbar />
      <div style={background}>
        <div style={style}>
          <CourseHeading courses={apiData.courses} />
          <InformationForm data={apiData.form_fields} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
