import React from "react";

const StepLabel = ({ name, stepNumber, currentStep }) => {
  return (
    <div className={`${stepNumber === currentStep ? "active-step" : ""}`}>
      {name}
    </div>
  );
};

export default StepLabel;
