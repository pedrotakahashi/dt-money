import { GlobalStyle } from "./assets/styles/global";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionsProvider } from "./hooks/useTransactions";
export function App() {
  return (
    <TransactionsProvider>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </ TransactionsProvider>
  );
}
