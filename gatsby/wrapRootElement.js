import React from "react"
import { ThemeProvider } from "styled-components"
import colors from "../src/styles/colors"

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={colors}>{element}</ThemeProvider>
}
