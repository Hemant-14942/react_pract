import React, { createContext, useContext,useState } from 'react'
const Themecontext = createContext();
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
     const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <Themecontext.Provider value={{theme,toggleTheme}}>
        {children}
    </Themecontext.Provider>
  )
}
export const useTheme = ()=>useContext(Themecontext);