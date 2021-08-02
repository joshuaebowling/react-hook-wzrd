import React from "react";

const Step = ({ next, prev, currentStep }) => {
  return (
    <div data-testid="step-component">
      <button onClick={(e) => prev(e)}>prev</button>
      <span>currentStep={currentStep}</span>
      <button onClick={(e) => next(e)}>next</button>
    </div>
  );
};

export default Step;
