import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { Container, TransactionRadioContainer, RadioBox } from "./styles";
import closeImg from "../../assets/images/close.svg";
import incomeImg from "../../assets/images/income.svg";
import outcomeImg from "../../assets/images/outcome.svg";
import { api } from "../../services/api";
interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
Modal.setAppElement("#root");

export function TransactionModal({ isOpen, onRequestClose }: ModalProps) {
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState(0);

  const handleCreateNewTransation = (event: FormEvent) => {
    event.preventDefault();
    const data = {
      type,
      title,
      value,
      category
    };

    api.post('/transactions', data);


  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button type="button" className="react-modal-close">
          <img src={closeImg} alt="close modal" onClick={onRequestClose} />
        </button>
        <Container onSubmit={handleCreateNewTransation}>
          <h2>Cadastrar Transação</h2>
          <input
            placeholder="Titulo"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            placeholder="Valor"
            type="number"
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
          />

          <TransactionRadioContainer>
            <RadioBox
              type="button"
              onClick={() => setType("deposit")}
              isActive={type === "deposit"}
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
              type="button"
              onClick={() => setType("withdraw")}
              isActive={type === "withdraw"}
              activeColor="red"
            >
              <img src={outcomeImg} alt="Saida" />
              <span>Saida</span>
            </RadioBox>
          </TransactionRadioContainer>

          <input
            placeholder="Categoria"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    </>
  );
}
