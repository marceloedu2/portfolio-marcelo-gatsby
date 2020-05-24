import React from "react"
import { Button, Contacts, Container, Image, Link } from "./style"

const NavBar = () => {
  return (
    <Container>
      <Image src={require("../../assets/icon.png")} alt="logo" />
      <Contacts>
        <Link>Sobre</Link>
        <Button>Contatos</Button>
      </Contacts>
    </Container>
  )
}

export default NavBar
