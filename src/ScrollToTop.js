import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

//This file is created to always scroll to top whenever you go to any route . You can find this in react router documentation (then seach for scroll restoration).
