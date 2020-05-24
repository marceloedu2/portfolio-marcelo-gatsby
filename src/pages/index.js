import React from "react"
import GlobalStyle from "../styles/global"

import {
  CardAbout,
  ContainerAbout,
  ContentAbout,
  ContentIntro,
  Image, ImageCard,
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
      <ContainerAbout>
        <TitleAbout>Sobre</TitleAbout>
        <ContentAbout>
          <CardAbout>
            <ImageCard src="https://images.clipartlogo.com/files/istock/previews/4897/48977460-vector-test-icon.jpg" />
            <div>title</div>
            <div>description</div>
          </CardAbout>
          <CardAbout>
            <ImageCard src="https://images.clipartlogo.com/files/istock/previews/4897/48977460-vector-test-icon.jpg" />
            <div>title</div>
            <div>description</div>
          </CardAbout>
          <CardAbout>
            <ImageCard src="https://images.clipartlogo.com/files/istock/previews/4897/48977460-vector-test-icon.jpg" />
            <div>title</div>
            <div>description</div>
          </CardAbout>
        </ContentAbout>
      </ContainerAbout>
    </>
  )
}
