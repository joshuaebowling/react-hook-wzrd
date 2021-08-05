import React, { useState } from "react";
import { render, fireEvent, waitFor, screen  } from "@testing-library/react";
import Step from "./Step2";
import '@testing-library/jest-dom/extend-expect'

describe("Step Component Tests", function () {
    const StepContainer: React.FunctionComponent = () => {
      const [currentStep, setCurrentStep] = useState(1)
      const next = () => setCurrentStep(currentStep + 1)
      const prev = () => setCurrentStep(currentStep - 1)
      return <><Step next={next} prev={prev} currentStep={currentStep} /></>
    }
  it("next button should be disabled initally", async () => {
    render(<StepContainer />);
    expect(screen.getByText("next")).not.toBeNull()
    expect(screen.getByText("next")).toBeDisabled()
  });
  it("next button should enable after entering 'test' into challenge input", async () => {
    render(<StepContainer />);
    expect(screen.getByLabelText("Challenge")).not.toBeNull()
    fireEvent.change(screen.getByLabelText("Challenge"), {target: {value: "test"}})
    expect(screen.getByLabelText("Challenge")).toHaveValue("test")
    expect(screen.getByText("next")).toBeEnabled()    
  });
  it("next buton should increment after being enabled", () => {
    render(<StepContainer />);
    fireEvent.change(screen.getByLabelText("Challenge"), {target: {value: "test"}})
    fireEvent.click(screen.getByText("next"))
    expect(screen.getByText("currentStep=2")).not.toBeNull()
  });
  it("next button should remain disabled when value other than test is entered", () => {
    render(<StepContainer />);
    expect(screen.getByText("next")).toBeDisabled()
    fireEvent.change(screen.getByLabelText("Challenge"), {target: {value: "testfoo"}})
    expect(screen.getByText("next")).toBeDisabled()
  })

});
