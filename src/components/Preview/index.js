import React from "react"
import { Container, Image, SubTitle, Title } from "./styles"

const Preview = () => {
  return (
    <Container>
      <Image src={require("../../assets/avatar.png")} alt="Avatar" />
      <Title>
        Olá, Sou Marcelo Araujo, desenvolvedor front-end.
      </Title>
      <SubTitle>
        Gosto de ajudar empresas iniciantes, pwequenas empresas e agências a obter sites
        de alta qualidade e uma experiência excepcional do usuário.
      </SubTitle>
    </Container>
  )
}

export default Preview
