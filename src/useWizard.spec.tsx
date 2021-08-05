import should from "should";
import React from "react";
import { render, fireEvent, waitFor, screen  } from "@testing-library/react";
import useWizard from "./useWizard";
import { StepArgs } from "./types";
import '@testing-library/jest-dom/extend-expect'

describe("useWizard Hook Tests", function () {
    const MockContent: React.FunctionComponent<StepArgs> = ({next, prev, currentStep}) => {
        return <>
            <span id="mockcontent">mockcontent</span>
        </>
    }
    const MockContentB: React.FunctionComponent<StepArgs> = ({next, prev, currentStep}) => {
        return <>
            <span id="mockcontentb">mockcontentb</span>
        </>
    }
    const Container: React.FunctionComponent<{step: number}> = ({step}) => {
        const { WizardItem, next, prev, currentStep } = useWizard()
        return <>
            <button onClick={next}>next</button>
            <button onClick={prev}>prev</button>
            <span>currentStep={currentStep}</span>
            <WizardItem StepContent={MockContent} number={1} />
            <WizardItem StepContent={MockContentB} number={2} />
        </>
    }
    it("useWizard Hook's WizardItem should render content when content's number = currentStep", () => {
        render(<Container step={1} />)
        expect(screen.getByText("mockcontent")).not.toBeNull()
    })
    it("useWizard Hook's WizardItem should not show content when content's != currentStep", () => {
        const { container } = render(<Container step={50} />)
        fireEvent.click(screen.getByText("next"))
        expect(container.querySelector("#mockcontent")).toBeNull()
    })
    it("useWizard Hook's WizardItem should show next content after clicking next", () => {
        const { container } = render(<Container step={50} />)
        fireEvent.click(screen.getByText("next"))
        expect(container.querySelector("#mockcontentb")).not.toBeNull()
    })
    it("useWizard Hook's WizardItem should show prev content after clicking prev", () => {
        const { container } = render(<Container step={50} />)
        fireEvent.click(screen.getByText("next"))
        expect(container.querySelector("#mockcontentb")).not.toBeNull()
        fireEvent.click(screen.getByText("prev"))
        expect(container.querySelector("#mockcontent")).not.toBeNull()

    })
    it("useWizard Hook's next button should increment currentStep", () => {
        render(<Container step={1} />)
        expect(screen.getByText("next")).not.toBeNull()
        fireEvent.click(screen.getByText("next"))
        expect(screen.getByText("currentStep=2")).not.toBeNull()
    })
    it("useWizard Hook's prev button should decrement currentStep", () => {
        render(<Container step={1} />)
        expect(screen.getByText("next")).not.toBeNull()
        fireEvent.click(screen.getByText("next"))
        expect(screen.getByText("currentStep=2")).not.toBeNull()
        expect(screen.getByText("prev")).not.toBeNull()
        fireEvent.click(screen.getByText("prev"))
        expect(screen.getByText("currentStep=1")).not.toBeNull()
    })

});
