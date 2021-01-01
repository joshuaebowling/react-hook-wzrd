import React, { useState, useContext } from "react";
import "./styles.css";

import useWizard from "./useWizard";
import Step from "./Step";
import Step2 from "./Step2";
import StepLabels from "./StepLabels";
import StepLabel from "./StepLabel";

export default function App() {
  var stepCount = 0;
  // if I were to do something like
  // const [stepCount, setStepCount] = useState(0)
  // and increment it in each WizardStep, I'd get
  // an infinite loop
  // Potentially this problem could be solved by externalizing the state
  // to redux or a lighter weight option
  const { WizardItem, next, prev, currentStep } = useWizard(stepCount);
  const steps = [
    { number: 1, label: "test", content: Step },
    { number: 2, label: "test 2", content: Step2 }
  ];
  return (
    <div className="App">
      <h1>React Hook Wizard</h1>
      <StepLabels
        steps={steps.map((s) => {
          return (
            <StepLabel
              name={s.label}
              stepNumber={s.number}
              currentStep={currentStep}
            />
          );
        })}
      />
      {steps.map((s) => (
        <WizardItem StepContent={s.content} number={s.number} />
      ))}
    </div>
  );
}
