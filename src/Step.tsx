import React from "react";

const Step = ({ next, prev, currentStep }) => {
  console.log("step");
  return (
    <div>
      <button onClick={(e) => prev(e)}>prev</button>
      <span>currentStep={currentStep}</span>
      <button onClick={(e) => next(e)}>next</button>
    </div>
  );
};

export default Step;
