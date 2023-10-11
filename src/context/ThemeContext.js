'use client';

import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkmode, setIsDarkmode] = useState(false);

  const toggleTheme = () => {
    setIsDarkmode(!isDarkmode);
    document.documentElement.classList.toggle('dark');
    
  };

  return (
    <ThemeContext.Provider value={{ isDarkmode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);