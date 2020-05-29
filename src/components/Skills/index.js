import React from "react"
import {
  Card,
  CardDesciption,
  CardTitle,
  Container,
  Content,
  Title
} from "./styes"
import {
  FcLandscape,
  FcAcceptDatabase,
  FcMultipleSmartphones
} from "react-icons/fc"

const Skills = () => {
  return (
    <Container>
      <Title>Dev Skills</Title>
      <Content>
        <Card>
          <FcLandscape size={120} />
          <CardTitle>Front-end</CardTitle>
          <CardDesciption>
            <h4>Skills</h4>
            <div>
              HTML, <br />
              CSS, <br />
              JS, <br />
              React
            </div>
            <h4>FrameWorks</h4>
            <div>Jquery, Bootstrap, Materialize, Ant Designer, Etc.</div>
          </CardDesciption>
        </Card>
        <Card>
          <FcAcceptDatabase size={120} />
          <CardTitle>Back-end</CardTitle>
          <CardDesciption>
            <h4>Skills</h4>
            <div>
              Node.js, <br />
              Asp classic, <br />
              Mysql, <br />
              AWS.
            </div>
          </CardDesciption>
        </Card>
        <Card>
          <FcMultipleSmartphones size={120} />
          <CardTitle>Mobile</CardTitle>
          <CardDesciption>
            <h4>Skill</h4>
            <div>React Native</div>
          </CardDesciption>
        </Card>
      </Content>
    </Container>
  )
}

export default Skills
