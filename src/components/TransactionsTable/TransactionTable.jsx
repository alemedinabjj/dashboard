import { useTransactions } from '../../context/useTransactions'
import { Table, Button, Container } from './styles'
import { ThemeContext } from '../../styles/ThemeProvider'
import { useContext } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { valueFormatted } from '../../utils/NumberFormat'

export const TransactionTable = () => {
  const { transactions, handleDelete, handleEdit } = useTransactions()
  const { theme } = useContext(ThemeContext)

  transactions.map(transaction => {
    console.log(transaction)
  })

  const DarkModeTable = {
    backgroundColor: 'rgb(30, 45, 59)',
    color: '#fff'
  }

  const LightModeTable = {
    backgroundColor: '#f7f7f7',
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
    <Container>
      <Table
        background={
          theme === 'dark'
            ? DarkModeTable.backgroundColor
            : LightModeTable.backgroundColor
        }
      >
        <thead>
          <tr>
            <th scope="col">Data</th>
            <th scope="col">Descrição</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{formatDate(transaction.date)}</td>
              <td>{transaction.description}</td>
              <td>
                {transaction.type === 'deposit' ? (
                  <span style={{ color: '#12A454' }}>
                    {valueFormatted(transaction.amount)}
                  </span>
                ) : (
                  <span style={{ color: '#E83F5B' }}>
                    {valueFormatted(transaction.amount)}
                  </span>
                )}
              </td>
              <Button
                color={theme === 'light' ? '#E83F5B' : '#E83F5B'}
                onClick={() => handleDelete(transaction.id)}
              >
                <FiTrash2 size={20} />
              </Button>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}
