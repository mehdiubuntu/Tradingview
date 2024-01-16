"use client";

import React, { useEffect, useState } from "react";
import { IoSearchOutline, IoReorderThree } from "react-icons/io5";

const Header = () => {
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
    <div onClick={switchMode} className="border border-red-200 w-10 h-10">
        
      {!darkMode ? <IoSearchOutline /> : <IoReorderThree />}
    </div>
  );
};

export default Header;
