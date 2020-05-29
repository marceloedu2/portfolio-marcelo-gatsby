import React from "react"
import GlobalStyle from "../styles/global"
import loadable from "@loadable/component"

export default function Home() {
  const Preview = loadable(() => import("../components/Preview"))
  const Introduction = loadable(() => import("../components/Introduction"))
  const NavBar = loadable(() => import("../components/NavBar"))
  const Skills = loadable(() => import("../components/Skills"))
  const Footer = loadable(() => import("../components/Footer"))

function getPosicaoElemento(elemID) {
  var offsetTrail = document.getElementById(elemID)
  var offsetLeft = 0
  var offsetTop = 0
  while (offsetTrail) {
    offsetLeft += offsetTrail.offsetLeft
    offsetTop += offsetTrail.offsetTop
    offsetTrail = offsetTrail.offsetParent
  }
  if (
    navigator.userAgent.indexOf("Mac") != -1 &&
    typeof document.body.leftMargin != "undefined"
  ) {
    offsetLeft += document.body.leftMargin
    offsetTop += document.body.topMargin
  }
  return { left: offsetLeft, top: offsetTop }
}
  window.onscroll = function () {
    getPosicaoElemento(Preview)
  }

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Preview />
      <Introduction />
      <Skills />
      <Footer />
    </>
  )
}
