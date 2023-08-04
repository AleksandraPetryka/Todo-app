import React, { createContext, useState } from "react";

export interface themeContextProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  themeClass: string;
}

export const ThemeContext = createContext<themeContextProps | undefined>(
  undefined
);

export const ThemeProvider = (props: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const themeClass: string = darkMode ? "dark" : "light";

  const value: themeContextProps = {
    darkMode,
    setDarkMode,
    themeClass
  };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

