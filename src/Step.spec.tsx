import should from "should";
import React, { useState } from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Step from "./Step";

describe("Step Component Tests", function () {
    const StepContainer: React.FunctionComponent = () => {
      const [currentStep, setCurrentStep] = useState(1)
      const next = () => setCurrentStep(currentStep + 1)
      const prev = () => setCurrentStep(currentStep - 1)
      return <><Step next={next} prev={prev} currentStep={currentStep} /></>
    }
  it("should show initial current step as 1", () => {
    render(<StepContainer />);
    should(screen.getByText("currentStep=1")).be.an.Object();
  })
  it("should increment on next", async () => {
    render(<StepContainer />);
    should(screen.getByText("next")).be.an.Object();
    fireEvent.click(screen.getByText("next"));
    should(screen.getByText("currentStep=2")).be.an.Object();
  });
  it("should decrement on prev", async () => {
    render(<StepContainer />);
    should(screen.getByText("prev")).be.an.Object();
    fireEvent.click(screen.getByText("prev"));
    should(screen.getByText("currentStep=0")).be.an.Object();
  });

});
