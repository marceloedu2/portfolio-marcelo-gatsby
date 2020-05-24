import React from "react"
import GlobalStyle from "../styles/global"

import {
  ContentAbout,
  ContentIntro,
  Image,
  SubTitleIntro, TitleAbout,
  TitleIntro
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
          Se você precisa de um desenvolvedor Web ou mobile, está no lugar
          certo.
        </SubTitleIntro>
        <Image src={require("../assets/avatar.png")} alt="Avatar" />
      </ContentIntro>
      <ContentAbout>
        <TitleAbout>Sobre</TitleAbout>
      </ContentAbout>
    </>
  )
}
