import React from "react"
import GlobalStyle from "../styles/global"

import {
  CardAbout,
  ContainerAbout,
  ContentAbout,
  ContentIntro,
  IconCard,
  Image,
  SubTitleIntro, TextCard,
  TitleAbout,
  TitleCard,
  TitleIntro
} from "./styles"
import NavBar from "../components/NavBar"
import { FcBullish, FcSmartphoneTablet, FcInTransit, FcReadingEbook } from "react-icons/fc"

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
          Se você precisa de um desenvolvedor Full Stack, está no lugar certo.
        </SubTitleIntro>
        <Image src={require("../assets/avatar.png")} alt="Avatar" />
      </ContentIntro>
      <ContainerAbout>
        <TitleAbout>Sobre</TitleAbout>
        <ContentAbout>
          <CardAbout>
            <IconCard>
              <FcInTransit size={140} />
            </IconCard>
            <TitleCard>rápido</TitleCard>
            <TextCard>
              Aplicações com tempos de carregamento rápidos e interação sem
              atrasos é a minha maior prioridade.
            </TextCard>
          </CardAbout>
          <CardAbout>
            <IconCard>
              <FcSmartphoneTablet size={140} />
            </IconCard>
            <TitleCard>Multiplataforma</TitleCard>
            <TextCard>
              Disponibiliso aplicações tando web RESPONSIVA quando para
              dispositivos mobiles.
            </TextCard>
          </CardAbout>
          <CardAbout>
            <IconCard>
              <FcReadingEbook size={140} />
            </IconCard>
            <TitleCard>Intuitivo</TitleCard>
            <TextCard>
              Aplicando conceitos de UX/UI para garantir Facilidade e
              intuitividade de uso.
            </TextCard>
          </CardAbout>
          <CardAbout>
            <IconCard>
              <FcBullish size={140} />
            </IconCard>
            <TitleCard>Dinamico</TitleCard>
            <TextCard>
              Seu site não precisa ser estatico, acredito que o legal de um site
              é sua dinamicidade.
            </TextCard>
          </CardAbout>
        </ContentAbout>
      </ContainerAbout>
    </>
  )
}
