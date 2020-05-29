import React, { useState } from "react"
import {
  Button,
  Contacts,
  Container,
  ContractsMobile,
  Image,
  Link,
} from "./style"
import { FiAlignRight, FiX } from "react-icons/fi"

const NavBar = () => {
  const [open, setOpen] = useState(false)

  document.onclick = event => {
    const modal = document.querySelector("ul")
    if (event.target !== modal && event.target.parentNode !== modal) {
      setOpen(false)
    }
  }

  return (
    <Container>
      <Image src={require("../../assets/icon.png")} alt="logo" />
      <Contacts>
        <Link>Dev Skills</Link>
        <Link>Sobre</Link>
        <Button>Contatos</Button>
      </Contacts>
      <ContractsMobile open={open}>
        <button
          onClick={() => {
            setOpen(!open)
          }}
        >
          {!open ? <FiAlignRight /> : <FiX />}
        </button>
        <ul>
          <li>Contatos</li>
          <li>Sobre</li>
          <li>Dev Skills</li>
          <li>Contatos</li>
          <li>Contatos</li>
        </ul>
      </ContractsMobile>
    </Container>
  )
}

export default NavBar
