import React from "react"
import { Card, CardText, CardTitle, Container, Content, Title } from "./styes"
import {
  FcLandscape,
  FcAcceptDatabase,
  FcMultipleSmartphones,
} from "react-icons/fc"

const Skills = () => {
  return (
    <Container>
      <Title>Dev Skills</Title>
      <Content>
        <Card>
          <FcLandscape size={120} />
          <CardTitle>Front-end</CardTitle>
          <CardText>desciption</CardText>
        </Card>
        <Card>
          <FcAcceptDatabase size={120} />
          <CardTitle>Back-end</CardTitle>
          <CardText>desciption</CardText>
        </Card>
        <Card>
          <FcMultipleSmartphones size={120} />
          <CardTitle>Mobile</CardTitle>
          <CardText>desciption</CardText>
        </Card>
      </Content>
    </Container>
  )
}

export default Skills
