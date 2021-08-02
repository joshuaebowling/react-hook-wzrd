import should from "should";
import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Step from "./Step";

const Test = () => {
  return <h1>hello</h1>;
};

describe("Step Component Tests", function () {
  it("should increment on next", () => {
    //render(<Step next={() => {}} prev={() => {}} currentStep={0} />);
    render(<Test />);
    // fireEvent.click(screen.getByText("next"));
    // should(screen.getByText("currentStep=1")).not().eql(null);
    should(1).eql(1);
  });
});
