import React, { useState } from "react"
import { Button, Container, Image } from "./style"
import { FiMessageSquare } from "react-icons/fi"


const NavBar = () => {
  const [modalState, setModalState] = useState(false)

  return (
      <Container>
        <Image src={require("../../assets/icon.png")} alt="Logomarca" />
        <Button
          onClick={() => {
            setModalState(!modalState)
          }}
        >
          <FiMessageSquare />
          <div>Contatos</div>
        </Button>
      </Container>
  )
}

export default NavBar
