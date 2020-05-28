import React from "react"
import GlobalStyle from "../styles/global"
import loadable from "@loadable/component"

export default function Home() {
  const Preview = loadable(() => import("../components/Preview"))
  const Introduction = loadable(() => import("../components/Introduction"))
  const NavBar = loadable(() => import("../components/NavBar"))
  const About = loadable(() => import("../components/About"))
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Preview />
      <Introduction />
      <About />
    </>
  )
}
