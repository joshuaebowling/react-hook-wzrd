import React, { useState } from "react";
const WizardItem = (next, prev, currentStep, incrementStepCount) => ({
  StepContent,
  number
}) => {
  incrementStepCount();
  if (currentStep !== number) return <></>;
  return <StepContent next={next} prev={prev} currentStep={currentStep} />;
};
function Wizard(stepCount) {
  const [currentStep, setCurrentStep] = useState(1);
  const incrementStepCount = () => {
    ++stepCount;
  };
  const changeStep = (delta: () => number) => () => setCurrentStep(delta);
  const increment = changeStep(() => currentStep + 1);
  const decrement = changeStep(() => currentStep - 1);
  const next = () => {
    if (currentStep >= stepCount) return false;
    increment();
    return currentStep;
  };
  const prev = () => {
    if (currentStep <= 1) return false;
    decrement();
    return currentStep;
  };
  return {
    WizardItem: WizardItem(next, prev, currentStep, incrementStepCount),
    next,
    prev,
    currentStep
  };
}

export default Wizard;
