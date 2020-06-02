import React from "react"
import {
  Card,
  CardContent,
  Container,
  Content,
  Description,
  Link,
  Title,
} from "./styles"

const Works = () => {
  return (
    <Container>
      <Title>Ultimos Trabalhos</Title>
      <Content>
        <Card image="https://i.ytimg.com/vi/TZh5L9rFTno/maxresdefault.jpg">
          <CardContent>
            <Description>GR8 Sistemas,Sistema de Gestão escolar</Description>
            <Link
              href="https://www.gr8.com.br/portal/default.asp"
              target="_blank"
            >
              Conferir
            </Link>
          </CardContent>
        </Card>
        <Card image="https://media-exp1.licdn.com/dms/image/C4D1BAQEetN7_2fxj7A/company-background_10000/0?e=2159024400&v=beta&t=VSwGXVbW-PgITxV9Yg78oQhm8OnNRw5hmKW0FCAESvE">
          <CardContent>
            <Description>eMasters, Torneios para todos</Description>
            <Link href="https://www.emastersapp.com/" target="_blank">
              Conferir
            </Link>
          </CardContent>
        </Card>
      </Content>
    </Container>
  )
}

export default Works
