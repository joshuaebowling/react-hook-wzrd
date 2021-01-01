/// <reference path="./index.d.ts" />
import React, { useState, useEffect, useContext } from "react";
const WizardItemContext = (
  next: () => number | boolean,
  prev: () => number | boolean,
  currentStep: number,
  incrementStepCount: ({ number, label }) => void
) => ({ StepContent, number, label }) => {
  incrementStepCount({ number, label });
  console.log("currentStep", currentStep, number);
  if (currentStep !== number) return <></>;
  return <StepContent next={next} prev={prev} currentStep={currentStep} />;
};

function Wizard(stepCount: number, setStepCount: (step: number) => void) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [steps, setSteps] = useState<Array<Wizard.IWizardStepData>>([]);
  const [
    currentStepData,
    setCurrentStepData
  ] = useState<Wizard.IWizardStepData | null>(null);
  const incrementStepCount = ({ number, label }) => {
    if (!steps.find((x) => x.number === number)) {
      console.log("set a ste", number, label);
      setSteps([...steps, { number, label }]);
    }
  };

  const changeStep = (delta: () => Wizard.IWizardStepData) => () =>
    setCurrentStep(delta);

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
  useEffect(() => {
    setCurrentStepData(steps[currentStep]);
  }, [currentStep]);
  return {
    WizardItem: WizardItemContext(next, prev, currentStep, incrementStepCount),
    next,
    prev,
    currentStep,
    currentStepData
  };
}

export default Wizard;
