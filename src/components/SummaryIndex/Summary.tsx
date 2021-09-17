import { useContext } from "react";

import { Container } from "./styles";
import incomeMsg from "../../assets/images/income.svg";
import outComeMsg from "../../assets/images/outcome.svg";
import totalImg from "../../assets/images/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  const totalWithdraws = transactions.reduce((acc, transactions) => {
    if (transactions.type === "withdraw") {
      return acc - transactions.amount;
    }
    return acc;
  }, 0);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeMsg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-Br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outComeMsg} alt="Saidas" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat("pt-Br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-header">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-Br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
