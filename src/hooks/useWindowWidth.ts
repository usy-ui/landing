import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = useState<number | undefined>();

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width || 0;
};
