import React from "react"
import GlobalStyle from "../styles/global"

import {
  ContentDesc,
  ContentIntro,
  Image,
  SubTitleIntro,
  TitleIntro,
} from "./styles"
import NavBar from "../components/NavBar"

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <ContentIntro>
        <TitleIntro>
          Olá, é um prazer ter você aqui. Meu nome é Marcelo Araujo.
        </TitleIntro>
        <SubTitleIntro>
          Se você precisa de um desenvolvedor FrontEnd, está no lugar certo.
        </SubTitleIntro>
        <Image src={require("../assets/avatar.png")} alt="Avatar" />
      </ContentIntro>
      <ContentDesc>teste</ContentDesc>
    </>
  )
}
