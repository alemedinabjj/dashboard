import { useTransactions } from '../../context/useTransactions'

export const Notifications = () => {
  const { summary } = useTransactions()


  if (summary.total >= 0) {
    return (
      <div>
        <h1>Saldo positivo</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Saldo negativo</h1>
      </div>
    )
  }

}
