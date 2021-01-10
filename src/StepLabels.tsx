import React from "react";

const StepLabels: React.FunctionComponent<{ children }> = (props) => {
  return <div className="flex-container">{props.children}</div>;
};

export default StepLabels;
