import { useState } from 'react'
import { useTransactions } from '../../context/useTransactions'
import * as S from './styles'
import Modal from 'react-modal'

export const NewTransaction = ({ onClose, isOpen, transaction }) => {
  const { addTransaction, transactions } = useTransactions()
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState(new Date())
  const [type, setType] = useState('deposit')

  const handleSubmit = async e => {
    e.preventDefault()

    await addTransaction({
      description,
      amount,
      date,
      type
    })

    setDescription('')
    setAmount(0)
    setDate(new Date())
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
      transform: 'translate(-50%, -50%)'
    }
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <S.Container>
        <h2>Add new transaction</h2>
        <S.Form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="description">Description</label>
            <S.Input
              type="text"
              id="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <S.Input
              type="number"
              id="amount"
              value={amount}
              onChange={e => setAmount(Number(e.target.value))}
            />
          </div>
          <div className="form-control">
            <label htmlFor="date">Date</label>
            <S.Input
              type="date"
              id="date"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="type">Type</label>
            <S.Select
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
        <S.Button className="btn" onClick={onClose}>
          Close
        </S.Button>
      </S.Container>
    </Modal>
  )
}
