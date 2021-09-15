import { Container } from "./styles";
import incomeMsg from '../../assets/images/income.svg';
import outComeMsg from '../../assets/images/outcome.svg';
import totalImg from '../../assets/images/total.svg';

export function Summary() {
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeMsg} alt="Entradas" />
        </header>
        <strong>R$1000.00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outComeMsg} alt="Saidas" />
        </header>
        <strong>-R$500.00</strong>
      </div>
      <div className="highlight-header">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$500.00</strong>
      </div>
    </Container>

  )
}
