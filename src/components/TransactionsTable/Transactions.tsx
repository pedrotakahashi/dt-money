import { Container } from "./styles";

export function Transactions()  {
  return(
  <Container>
    <table>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Desenvolvimento de web site</td>
          <td className="deposit">RS12.000</td>
          <td>Desenvolvimento</td>
          <td>15/09/2021</td>
        </tr>
        <tr>
          <td>Aluguel</td>
          <td className="withdraw">-RS1.000</td>
          <td>Casa</td>
          <td>16/09/2021</td>
        </tr>
        <tr>
        <td>Desenvolvimento de web site</td>
          <td>RS12.000</td>
          <td>Desenvolvimento</td>
          <td>15/09/2021</td>
        </tr>
        <tr>
        <td>Desenvolvimento de web site</td>
          <td>RS12.000</td>
          <td>Desenvolvimento</td>
          <td>15/09/2021</td>
        </tr>
      </tbody>
    </table>
  </Container>
  );
}