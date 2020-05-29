import React from "react"
import { ThemeProvider } from "styled-components"
import colors from "../src/styles/colors"
import theme from "../src/styles/themes"

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
