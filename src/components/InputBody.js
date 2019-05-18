import React from "react";
import Input from "./Input.js";
import "../style/InputBody.css";

const InputBody = ({
  handleChange,
  crimeLog,
  currentPostcode,
  newPostcode
}) => {
  return (
    <div className="InputBody">
      <Input
        handleChange={handleChange}
        crimeLog={crimeLog}
        currentPostcode={currentPostcode}
        newPostcode={newPostcode}
      />
    </div>
  );
};

export default InputBody;
