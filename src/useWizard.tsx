import React, { useState } from "react";
import { StepIncrementer } from "./StepIncrementer";

const WizardItem = (
  next: () => number | false,
  prev: () => number | false,
  currentStep: number,
  incrementStepCount: () => void
) => ({ StepContent, number }) => {
  // + 1 item to the number of steps
  incrementStepCount();
  if (currentStep !== number) return <></>;
  return <StepContent next={next} prev={prev} currentStep={currentStep} />;
};

function Wizard() {
  // lets start on step 1. The first step.
  const [currentStep, setCurrentStep] = useState(1);
  const stepIncrementer = new StepIncrementer();
  const incrementStepCount = () => {
    stepIncrementer.incrementStep();
  };
  const changeStep = (delta: () => number) => () => setCurrentStep(delta);
  const increment = changeStep(() => currentStep + 1);
  const decrement = changeStep(() => currentStep - 1);
  const next = () => {
    if (currentStep >= stepIncrementer.stepCount) return false;
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
