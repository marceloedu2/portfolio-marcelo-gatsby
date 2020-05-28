import React from "react"
import {
  Card,
  Container,
  Content,
  IconCard,
  TextCard,
  Title,
  TitleCard,
} from "./styles"
import {
  FcBullish,
  FcSmartphoneTablet,
  FcInTransit,
  FcReadingEbook,
} from "react-icons/fc"

const About = () => {
  return (
    <Container>
      <Title>Sobre</Title>
      <Content>
        <Card>
          <IconCard>
            <FcInTransit size={140} />
          </IconCard>
          <TitleCard>rápido</TitleCard>
          <TextCard>
            Aplicações com tempos de carregamento rápidos e interação sem
            atrasos é a minha maior prioridade.
          </TextCard>
        </Card>
        <Card>
          <IconCard>
            <FcSmartphoneTablet size={140} />
          </IconCard>
          <TitleCard>Multiplataforma</TitleCard>
          <TextCard>
            Disponibiliso aplicações tando web RESPONSIVA quando para
            dispositivos mobiles.
          </TextCard>
        </Card>
        <Card>
          <IconCard>
            <FcReadingEbook size={140} />
          </IconCard>
          <TitleCard>Intuitivo</TitleCard>
          <TextCard>
            Aplicando conceitos de UX/UI para garantir Facilidade e
            intuitividade de uso.
          </TextCard>
        </Card>
        <Card>
          <IconCard>
            <FcBullish size={140} />
          </IconCard>
          <TitleCard>Dinamico</TitleCard>
          <TextCard>
            Seu site não precisa ser estatico, acredito que o legal de um site é
            sua dinamicidade.
          </TextCard>
        </Card>
      </Content>
    </Container>
  )
}

export default About
