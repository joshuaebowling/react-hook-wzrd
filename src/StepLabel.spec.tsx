import React, { useState } from "react";
import { render, fireEvent, waitFor, screen  } from "@testing-library/react";
import StepLabel from "./StepLabel";
import '@testing-library/jest-dom/extend-expect'

describe("Step Component Tests", function () {
    const testlabel1 = "label1"
    const StepLabelContainer: React.FunctionComponent<{currentStep: number}> = ({currentStep}) => {
      return <>
        <StepLabel name={testlabel1} stepNumber={1} currentStep={currentStep} />
    </>
    }
    it("Step Label should have active-step class when current step = step number", () => {
        render(<StepLabelContainer currentStep={1} />)
        expect(screen.getByText(testlabel1)).toHaveClass("active-step")
    })
    it("Step Label should NOT have active-step class when current step != step number", () => {
        render(<StepLabelContainer currentStep={2} />)
        expect(screen.getByText(testlabel1)).not.toHaveClass("active-step")
    })
});
