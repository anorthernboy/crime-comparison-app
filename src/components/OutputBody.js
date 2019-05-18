import React from "react";
import Output from "./Output.js";
import "../style/OutputBody.css";

const OutputBody = ({ resetCrimes, currentCrimes, newCrimes }) => {
  return (
    <div className="OutputBody">
      <Output
        resetCrimes={resetCrimes}
        currentCrimes={currentCrimes}
        newCrimes={newCrimes}
      />
    </div>
  );
};

export default OutputBody;
