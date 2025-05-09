import { createContext, useContext } from "react";

export const  ThemeContext = createContext({
    // here we pass variable, fucntions, states , hooks...
    themeMode : "Light",
    darkTheme: () => {},
    LightTheme: () => {},
})


export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}