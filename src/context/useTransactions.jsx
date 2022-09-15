import { createContext, useContext, useEffect, useState } from 'react'

const TransactionsContext = createContext()

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem('transactions')) || []
  )


  useEffect(() => {
    const transactions = JSON.parse(localStorage.getItem('transactions'))
    if (transactions) {
      setTransactions(transactions)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }, [transactions])

  const addTransaction = transaction => {
    setTransactions([transaction, ...transactions])
  }

  const handleDelete = id => {
    const newTransactions = transactions.filter(transaction => transaction.id !== id)
    setTransactions(newTransactions)
  }

  return (
    <TransactionsContext.Provider value={{ transactions, addTransaction, handleDelete }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => useContext(TransactionsContext)
