import { useEffect } from "react";

export const useTimer = (fn: () => void) => {
  console.log("useTimer called");
  useEffect(() => {
    const intervalId = setInterval(() => {
      fn();
    }, 1000);
    return () => clearInterval(intervalId);
  }, [fn]);
};

export default useTimer;
