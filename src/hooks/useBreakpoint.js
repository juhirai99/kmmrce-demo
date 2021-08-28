import { useCallback, useEffect, useState} from "react";

const SCREEN_BREAKPOINTS = [576, 767, 992, 1200];
const isBrowserFound = () => typeof window !== "undefined";
const getScreenSize = (breakpoint) => {
  const innerWidth = isBrowserFound() ? window.innerWidth : 0;
  return {
    isLaptop: innerWidth >= breakpoint[3],
    isPad1: innerWidth >= breakpoint[1] && innerWidth < breakpoint[2],
    isPad2: innerWidth >= breakpoint[2] && innerWidth < breakpoint[3],
    isMobile: innerWidth < breakpoint[1],
  };
};

export default function useBreakpoint(breakpoint = SCREEN_BREAKPOINTS) {
  const [deviceType, setDeviceType] = useState(getScreenSize(breakpoint));
  const resizeSize = useCallback(() => {
    setDeviceType(getScreenSize(breakpoint));
  }, [breakpoint]);
  useEffect(() => {
    window.addEventListener("resize", resizeSize);
    return () => {
      window.removeEventListener("resize", resizeSize);
    };
  }, [resizeSize]);
  return deviceType;
}
