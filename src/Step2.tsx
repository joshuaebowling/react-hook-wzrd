import React, { useState, useEffect } from "react";
import { StepArgs } from "./types";

const Step: React.FunctionComponent<StepArgs> = ({ next, prev, currentStep }) => {
  const [val, setVal] = useState("");
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    val === "test" ? setDisabled(false) : setDisabled(true);
  }, [val]);
  return (
    <div>
      <button onClick={prev}>prev</button>
      <label htmlFor="challenge">Challenge</label>
      <input id="challenge" name="challenge" value={val} onChange={(e) => setVal(e.target.value)} />
      <button disabled={disabled} type="button" onClick={next}>
        next
      </button>
      <span>currentStep={currentStep}</span>
      {val !== "test" && <p>Enter the word "test" into input to proceed</p>}
    </div>
  );
};

export default Step;
