import React from "react"
import { Container, Image, SubTitle, Title } from "./style"

const Introduction = () => {
  return (
    <Container>
      <Title>
        Olá, é um prazer ter você aqui. Meu nome é Marcelo Eduardo Araujo.
      </Title>
      <SubTitle>
        Se você precisa de um desenvolvedor Full Stack, está no lugar certo.
      </SubTitle>
      <Image src={require("../../assets/avatar.png")} alt="Avatar" />
    </Container>
  )
}

export default Introduction
