import React, { useState } from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Step from "./Step";
import '@testing-library/jest-dom/extend-expect'

describe("Step Component Tests", function () {
    const StepContainer: React.FunctionComponent = () => {
      const [currentStep, setCurrentStep] = useState(1)
      const next = () => setCurrentStep(currentStep + 1)
      const prev = () => setCurrentStep(currentStep - 1)
      return <><Step next={next} prev={prev} currentStep={currentStep} /></>
    }
  it("should show initial current step as 1", () => {
    render(<StepContainer />);
    expect(screen.getByText("currentStep=1")).not.toBeNull();
  })
  it("should increment on next", async () => {
    render(<StepContainer />);
    expect(screen.getByText("next")).not.toBeNull()
    fireEvent.click(screen.getByText("next"));
    expect(screen.getByText("currentStep=2")).not.toBeNull();
  });
  it("should decrement on prev", async () => {
    render(<StepContainer />);
    expect(screen.getByText("prev")).not.toBeNull();
    fireEvent.click(screen.getByText("prev"));
    expect(screen.getByText("currentStep=0")).not.toBeNull()
  });

});
