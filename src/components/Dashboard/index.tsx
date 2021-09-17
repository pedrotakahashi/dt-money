import { Summary } from "../SummaryIndex/Summary";
import { Transactions } from "../TransactionsTable/Transactions";
import { Container } from "./styles";

export function Dashboard() {
  return(
    <Container>
      <Summary />
      <Transactions />
    </Container>
  );
}
