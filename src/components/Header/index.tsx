import logoImg from "../../assets/images/logo.svg";
import { Container, Content } from "./styles";
export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  );
}
