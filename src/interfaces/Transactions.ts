
export interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export type TransactionInput = Omit <Transaction, 'id' | 'createdAt'> ;

export interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput ) => Promise<void>;
}
