import { useState, createContext } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  )

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
      localStorage.setItem("theme", "dark")
    } else {
      setTheme("light")
      localStorage.setItem("theme", "light")
    }
  }



  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
