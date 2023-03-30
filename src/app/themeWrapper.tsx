"use client"
import React from "react"
import { ThemeProvider } from "theme-ui"
import theme from "../theme"
export default function ThemeWrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
