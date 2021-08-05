import React from "react";
import { StepArgs } from "./types";
const Step: React.FunctionComponent<StepArgs> = ({ next, prev, currentStep }) => {
  return (
    <div data-testid="step-component">
      <button onClick={() => prev()}>prev</button>
      <span>currentStep={currentStep}</span>
      <button onClick={() => next()}>next</button>
    </div>
  );
};

export default Step;
