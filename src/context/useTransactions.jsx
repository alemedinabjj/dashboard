import { createContext, useContext, useEffect, useState } from "react";

const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );

  useEffect(() => {
    const transactions = JSON.parse(localStorage.getItem("transactions"));
    if (transactions) {
      setTransactions(transactions);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const handleDelete = (id) => {
    const newTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(newTransactions);
  };

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposit += Number(transaction.amount);
        acc.total += Number(transaction.amount);
      } else {
        acc.withdraw += Number(transaction.amount);
        acc.total -= Number(transaction.amount);
      }

      return acc;
    },
    {
      deposit: 0,
      withdraw: 0,
      total: 0,
    }
  );

  return (
    <TransactionsContext.Provider
      value={{ transactions, addTransaction, handleDelete, summary }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionsContext);
