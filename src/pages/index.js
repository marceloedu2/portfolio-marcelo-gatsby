import React from "react"
import GlobalStyle from "../styles/global"
import loadable from "@loadable/component"
import { Helmet } from "react-helmet"

export default function Home() {
  const Preview = loadable(() => import("../components/Preview"))
  const Introduction = loadable(() => import("../components/Introduction"))
  const NavBar = loadable(() => import("../components/NavBar"))
  const Skills = loadable(() => import("../components/Skills"))
  const Footer = loadable(() => import("../components/Footer"))

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio Marcelo Araujo</title>
        <link rel="canonical" href="https://www.marceloaraujodev.online" />
      </Helmet>
      <GlobalStyle />
      <NavBar />
      <Preview />
      <Introduction />
      <Skills />
      <Footer />
    </>
  )
}
