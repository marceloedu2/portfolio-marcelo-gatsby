import React from "react"
import { Container, Image, SubTitle, Title } from "./styles"

const Preview = () => {
  return (
    <Container>
      <Image fixed={require("../../assets/avatar.png")} alt="Avatar" />
      <Title>Desenvolvedor Front-end, Back-end e Mobile.</Title>
      <SubTitle>
        Se você precisa de alguem para "Codar", este é o site certo.
      </SubTitle>
    </Container>
  )
}

export default Preview
