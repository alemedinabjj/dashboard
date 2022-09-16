import { useState } from 'react'
import { useTransactions } from '../../context/useTransactions'
import { ThemeContext } from '../../styles/ThemeProvider'
import * as S from './styles'
import Modal from 'react-modal'
import { useContext } from 'react'

export const NewTransaction = ({ onClose, isOpen, transaction }) => {
  const { addTransaction, transactions } = useTransactions()
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState(new Date())
  const [type, setType] = useState('deposit')
  const [id, setId] = useState(0)

  const { theme } = useContext(ThemeContext)

  const handleSubmit = async e => {
    e.preventDefault()

    await addTransaction({
      description,
      amount,
      date,
      type,
      id
    })

    setDescription('')
    setAmount(0)
    setDate(new Date())
    setId(id + 1)
    onClose()
  }

  const customStyles = {
    content: {
      width: '50%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: theme === 'dark' ? '#1e2d3b' : '#f7f7f7',
      color: theme === 'dark' ? '#fff' : '#000',
      border: 'none',
      borderRadius: '8px',
      boxShadow: '0 0 60px rgba(0, 0, 0, 0.05)',
      padding: '2rem',
    
    }
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <S.Container>
        <h2>Add new transaction</h2>
        <S.Form
          onSubmit={handleSubmit}
          color={theme === 'dark' ? '#fff' : '#000'}
        >
          <div className="form-control">
            <label htmlFor="description">Description</label>
            <S.Input
              color={theme === 'dark' ? '#fff' : '#000'}
              type="text"
              id="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <S.Input
              color={theme === 'dark' ? '#fff' : '#000'}
              type="number"
              id="amount"
              value={amount}
              onChange={e => setAmount(Number(e.target.value))}
            />
          </div>
          <div className="form-control">
            <label htmlFor="date">Date</label>
            <S.Input
              color={theme === 'dark' ? '#fff' : '#000'}
              type="date"
              id="date"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="type">Type</label>
            <S.Select
              color={theme === 'dark' ? '#fff' : '#000'}
              id="type"
              value={type}
              onChange={e => setType(e.target.value)}
            >
              <option value="deposit">Deposit</option>
              <option value="withdraw">Withdraw</option>
            </S.Select>
          </div>

          <S.Button className="btn">Add transaction</S.Button>
        </S.Form>
        <S.ButtonClose className="btn" onClick={onClose}>
          Close
        </S.ButtonClose>
      </S.Container>
    </Modal>
  )
}
