import React from "react"
import { Container, ContentButton, ContentContact, ContentImage, Image } from "./styles"
import { AiOutlineMail } from "react-icons/ai"

const Footer = () => {
  return (
    <Container>
      <ContentImage>
        <Image src={require("../../assets/logoWhite.png")} />
      </ContentImage>
      <ContentButton>
        <button onClick={() => {}}>Contatos</button>
      </ContentButton>
      <ContentContact>
        <ul>
          <li>
            <AiOutlineMail /> Marcelo.edu@gmail.com
          </li>
        </ul>
      </ContentContact>
    </Container>
  )
}

export default Footer
