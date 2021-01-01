import { useState } from "react";

const useTimeoutInterrupt: () => (
  todo: () => void,
  waitFor: number
) => void = () => {
  const [currentTO, setCurrentTO] = useState<number | null>(null);
  const timeoutInterrupt = (todo, waitFor) => {
    if (currentTO) {
      clearTimeout(currentTO);
    }
    let timeout = setTimeout(() => {
      todo();
    }, waitFor);
    setCurrentTO(timeout);
  };
  return timeoutInterrupt;
};

export default useTimeoutInterrupt;
