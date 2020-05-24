import React from "react"
import { ThemeProvider } from "styled-components"
import light from "../src/styles/theme/light"

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={light}>{element}</ThemeProvider>
}
