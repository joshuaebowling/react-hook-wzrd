import should from "should";
import React, { useState } from "react";
import { render, fireEvent, waitFor, screen  } from "@testing-library/react";
import WizardItem from "./WizardItem";
import { StepArgs } from "./types";
import '@testing-library/jest-dom/extend-expect'

describe("WizardItem Component Tests", function () {
    const StepContent: React.FunctionComponent<StepArgs> = ({next, prev, currentStep}) => (<>
        <span>next={next()}</span>
        <span>prev={prev()}</span>
        <span>currentStep={currentStep}</span>
    </>)
    const ItemContainer: React.FunctionComponent<{currentStep: number, stepNumber: number}> = ({currentStep, stepNumber}) => {
        const next = jest.fn(() => 2)
        const prev = jest.fn(() => 0)
        const increment = jest.fn(() => {})
        const Step = WizardItem(next, prev, stepNumber, increment)
        return <><Step StepContent={StepContent} number={currentStep} /></>
    }
    it("Wizard item should show item when current step = item's step number", () => {
        const { container } = render(<ItemContainer currentStep={1} stepNumber={1} />);
        expect(container.firstChild).not.toBeNull()
    })
    it("Wizard item should not show item when current step != item's step number", () => {
        const { container }  = render(<ItemContainer currentStep={2} stepNumber={1} />);
        expect(container.firstChild).toBeNull()
    })
    it("Wizard item should show item when current step = item's step number", () => {
        const { container } = render(<ItemContainer currentStep={1} stepNumber={1} />);
        expect(screen.getByText("next=2")).not.toBeNull()
        expect(screen.getByText("prev=0")).not.toBeNull()
        expect(screen.getByText("currentStep=1")).not.toBeNull()
    });
});
