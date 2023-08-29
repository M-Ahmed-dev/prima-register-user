import React from "react";
import CourseHeading from "../CourseHeading/CourseHeading";
import InformationForm from "../InformationForm/InformationForm";
import LoggerCourse from "../LoggerDetails/LoggerCourse";
import LoggerDetails from "../LoggerDetails/LoggerDetails";
import RegisterMessage from "../RegisterMessage/RegisterMessage";

const RegisterUser = ({ apiData, newData, postUrl, newResponse }) => {
  console.log("newReponse", newResponse);
  const isNewUser = apiData.user_status === "new_user";
  const isExistingUser = newResponse.user_status === "existing_user";
  const created = newResponse.user_status === "created";

  if (isNewUser) {
    return (
      <>
        <CourseHeading courses={apiData.courses} />
        <InformationForm
          email={newData.email}
          postUrl={postUrl}
          formData={apiData.form_fields}
        />
      </>
    );
  } else if (isExistingUser) {
    return (
      <>
        <LoggerCourse courses={newResponse.courses} />
        <LoggerDetails
          login={newResponse.priima_login}
          user={newResponse.user_details}
        />
      </>
    );
  } else if (created) {
    <>
      <LoggerCourse courses={newResponse.courses} />
      <LoggerDetails
        login={newResponse.priima_login}
        user={newResponse.user_details}
      />
    </>;
  } else {
    return <RegisterMessage />;
  }
};

export default RegisterUser;
