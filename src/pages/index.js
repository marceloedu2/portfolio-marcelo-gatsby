import React from "react"
import GlobalStyle from "../styles/global"
import Introduction from "../components/Introduction"
import NavBar from "../components/NavBar"
import About from "../components/about"

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Introduction />
      <About />
    </>
  )
}
