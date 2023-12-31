import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

export function useAnimate() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
}
