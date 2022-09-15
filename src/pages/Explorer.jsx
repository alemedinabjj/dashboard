import { useContext } from "react"
import { ThemeContext } from "../styles/ThemeProvider"

export const Explorer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <section
      style={{
        backgroundColor: theme === "light" ? "white" : "rgb(21, 32, 43)",
        color: theme === "light" ? "black" : "white",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >

    </section>
  )
}