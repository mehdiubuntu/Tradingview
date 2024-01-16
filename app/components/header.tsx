"use client";

import React, { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bS";

const DarkMode = () => {
  const size = "24px";
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);
  const switchMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkMode", "true");
      window.document.documentElement.classList.add("dark");
    } else if (darkMode === false) {
      localStorage.setItem("darkMode", "false");
      window.document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(localStorage.getItem("darkMode") === "true");
    }
  }, [darkMode]);

  return (
    <div onClick={switchMode} className="text-white cursor-pointer">
      {!darkMode ? <MdOutlineWbSunny /> : <BsFillMoonStarsFill />}
    </div>
  );
};

export default DarkMode;
