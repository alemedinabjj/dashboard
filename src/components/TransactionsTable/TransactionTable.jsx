import { useTransactions } from '../../context/useTransactions'
import { Table } from './styles'
import { ThemeContext } from '../../styles/ThemeProvider'
import { useContext } from 'react'

export const TransactionTable = () => {
  const { transactions } = useTransactions()
  const { theme } = useContext(ThemeContext)

  transactions.map(transaction => {
    console.log(transaction)
  })

  const DarkModeTable = {
    backgroundColor: '#1f1f1f',
    color: '#fff'
  }

  const LightModeTable = {
    backgroundColor: '#fff',
    color: '#000'
  }

  const formatDate = date => {
    const newDate = new Date(date)
    const day = newDate.getDate().toString().padStart(2, '0')
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0')
    const year = newDate.getFullYear()

    return `${day}/${month}/${year}`
  }

  return (
    <Table>
      <thead>
        <tr>
          <th scope="col">Data</th>
          <th scope="col">Descrição</th>
          <th scope="col">Valor</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{formatDate(transaction.date)}</td>
            <td>{transaction.description}</td>
            <td>
              {transaction.type === 'deposit' ? (
                <span style={{ color: '#12A454' }}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount)}
                </span>
              ) : (
                <span style={{ color: '#E83F5B' }}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount)}
                </span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
