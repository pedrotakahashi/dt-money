import { useState } from "react";
import logoImg from "../../assets/images/logo.svg";
import { TransactionModal } from "../TransactionModal";
import { Container, Content } from "./styles";

export function Header() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={handleOpenModal}>
          Nova Transação
        </button>
      </Content>
      <TransactionModal isOpen={openModal} onRequestClose={handleCloseModal} />
    </Container>
  );
}
