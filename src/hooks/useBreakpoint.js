import { useState, useEffect, useCallback } from "react";

const BREAKPOINTS = [576, 767, 992, 1200];

const isBrowser = () => typeof window !== "undefined";

const getSize = (breakpoints) => {
  const innerWidth = isBrowser() ? window.innerWidth : 0;

  return {
    isMobile: innerWidth < breakpoints[1],
    isPad1: innerWidth >= breakpoints[1] && innerWidth < breakpoints[2],
    isPad2: innerWidth >= breakpoints[2] && innerWidth < breakpoints[3],
    isLaptop: innerWidth >= breakpoints[3],
  };
};

export default function useBreakpoints(breakpoints = BREAKPOINTS) {
  const [device, setDevice] = useState(getSize(breakpoints));

  const changeSize = useCallback(() => {
    setDevice(getSize(breakpoints));
  }, [breakpoints]);

  useEffect(() => {
    window.addEventListener("resize", changeSize);
    return () => {
      window.removeEventListener("resize", changeSize);
    };
  }, [changeSize]);

  return device;
}
