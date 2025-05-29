"use client"

import { createContext, useContext, useState, useEffect } from "react"

const ThemeContext = createContext({
  theme: "system",
  setTheme: () => {},
})

export function ThemeProvider({ children, ...props }) {
  const [theme, setThemeState] = useState("system")

  const setTheme = (theme) => {
    setThemeState(theme)
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme")
      if (storedTheme) {
        setThemeState(storedTheme)
      } else {
        setThemeState("system")
      }
    }
  }, [])

  useEffect(() => {
    if (theme === "system") {
      if (typeof window !== "undefined") {
        document.documentElement.classList.remove("dark")
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark")
        }
      }
    } else if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
