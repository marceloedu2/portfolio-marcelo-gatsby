import React from "react"
import GlobalStyle from "../styles/global"
import loadable from '@loadable/component'
// import Introduction from "../components/Introduction"
// import NavBar from "../components/NavBar"
// import About from "../components/about"

export default function Home() {
  const Introduction = loadable(() => import('../components/Introduction'))
  const NavBar = loadable(() => import('../components/NavBar'))
  const About = loadable(() => import('../components/About'))
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Introduction />
      <About />
    </>
  )
}
