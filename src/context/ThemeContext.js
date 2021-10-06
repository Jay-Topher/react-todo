import { useState, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyes } from "../constants/GlobalStyles";
import { lightTheme, darkTheme } from "../constants/Themes";

export const ThemeContext = createContext();

const Theme = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <ThemeContext.Provider value={themeToggler}>
                <GlobalStyes />
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    );
};

export default Theme;
