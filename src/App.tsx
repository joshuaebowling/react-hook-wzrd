import React, { useState, useContext } from "react";
import "./styles.css";

import useWizard from "./useWizard";
import Step from "./Step";
import Step2 from "./Step2";
import StepLabels from "./StepLabels";
import StepLabel from "./StepLabel";

export default function App() {
  const { WizardItem, currentStep } = useWizard();
  const steps = [
    { number: 1, label: "test", content: Step },
    { number: 2, label: "test 2", content: Step2 }
  ];
  return (
    <div className="App">
      <h1>React Hook Wizard</h1>
      <StepLabels>
        {steps.map((s) => (
          <StepLabel
            name={s.label}
            stepNumber={s.number}
            currentStep={currentStep}
          />
        ))}
      </StepLabels>
      {steps.map((step) => (
        <WizardItem number={step.number} StepContent={step.content} />
      ))}
    </div>
  );
}
