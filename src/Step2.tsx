import React, { useState, useEffect } from "react";

const Step = ({ next, prev, currentStep }) => {
  console.log("step");
  const [val, setVal] = useState("");
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    val === "test" ? setDisabled(false) : setDisabled(true);
  }, [val]);
  return (
    <div>
      <button onClick={prev}>prev</button>
      <input value={val} onChange={(e) => setVal(e.target.value)} />
      <button disabled={disabled} type="button">
        next
      </button>
      {val !== "test" && <p>Enter the word "test" into input to proceed</p>}
    </div>
  );
};

export default Step;
