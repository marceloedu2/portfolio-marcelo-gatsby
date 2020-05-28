import React from "react"
import { Container, SubTitle, Title } from "./styles"

const Introduction = () => {
  return (
    <Container>
      <Title>
        Olá, Seja Bem Vindo! <br />
        meu nome é Marcelo Eduardo Araújo,{" "}
      </Title>
      <SubTitle>
        Dês de pequeno sou um entusiasta da tecnologia, sempre em contato e
        fuçando em algo no meu velho computador. Agora com 26 anos e cursando o
        7° Período de Engenharia da Computação na{" "}
        <a href="https://www4.unievangelica.edu.br/">
          UniEVANGÉLICA - Centro Universitário de Anápolis
        </a>
        , foi aí que surgiu o gosto pelo desenvolvimento de softwares.
        Atualmente trabalho na empresa{" "}
        <a href="https://www.gr8.com.br/portal/default.asp">GR8 Sistemas</a>{" "}
        onde atuo como Dev. fullstack em uma equipe pequena. <br />
        Estou sempre em busca de desafios e procurando evoluir minhas Skills
        todos os dias, você pode acompanhar alguns projetos particulares
        acessando meu <a href="https://github.com/marceloedu2">Github</a>.
      </SubTitle>
    </Container>
  )
}

export default Introduction
