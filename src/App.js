import React from "react";
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
  return (
    <>
      <Navbar />
      <div style={background}>
        <div style={style}>
          <CourseHeading />
          <InformationForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
