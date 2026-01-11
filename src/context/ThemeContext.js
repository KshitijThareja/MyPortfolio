'use client';

import { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkmode, setIsDarkmode] = useState(true);

  useEffect(() => {
    if (isDarkmode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkmode]);

  const toggleTheme = () => {
    setIsDarkmode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkmode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);