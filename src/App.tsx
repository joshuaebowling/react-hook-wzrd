import React, { useState } from "react";
import "./styles.css";

import useWizard from "./useWizard";
import Step from "./Step";
import Step2 from "./Step2";
import StepLabels from "./StepLabels";
import StepLabel from "./StepLabel";

export default function App() {
  const [stepCount, setStepCount] = useState(0);
  // could call/control next prev outside of wizard item,
  // but I'm not going to
  const { WizardItem, next, prev, currentStep } = useWizard(
    stepCount,
    setStepCount
  );
  return (
    <div className="App">
      <h1>React Hook Wizard</h1>
      <StepLabels
        steps={
          <>
            <StepLabel name="test" stepNumber={1} currentStep={currentStep} />
            <StepLabel name="test 2" stepNumber={2} currentStep={currentStep} />
          </>
        }
      ></StepLabels>
      <WizardItem StepContent={Step} number={1} label="test" />
      <WizardItem StepContent={Step2} number={2} label="test2" />
    </div>
  );
}
