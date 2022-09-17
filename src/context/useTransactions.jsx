import { createContext, useContext, useEffect, useState } from 'react'
import apiFirebase from '../services/apiFirebase'

const TransactionsContext = createContext()

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([])

  const newTransaction = async (transaction) => {
    const response = await apiFirebase.addNewTransaction(transaction)
    setTransactions([...transactions, response])
  }

  const getTransactions = async () => {
    const response = await apiFirebase.getTransactions()
    setTransactions(response)
    console.log(response)
  }

  useEffect(() => {
    getTransactions()
  }, [])
  

  return (
    <TransactionsContext.Provider value={{ transactions, newTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
export const useTransactions = () => useContext(TransactionsContext)
