import { GlobalStyle } from './styles/GlobalStyle'
import { ThemeProvider } from './styles/ThemeProvider'
import { AppRoutes } from './AppRoutes'
import { TransactionsProvider } from './context/useTransactions'
import { useState } from 'react'
import Modal from 'react-modal'
import { NewTransaction } from './components/newTransaction/NewTransaction'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import { Login } from './pages/Login/Login'

Modal.setAppElement('#root')

function App() {
  const { user, setUser } = useContext(AuthContext)

  const [transactionModalIsOpen, setTransactionModalIsOpen] = useState(false)

  const handleOpenTransactionModal = () => {
    setTransactionModalIsOpen(true)
  }

  const handleCloseTransactionModal = () => {
    setTransactionModalIsOpen(false)
  }

  if (!user) {
    return <Login />
  }

  return (
    <TransactionsProvider>
      <ThemeProvider>
        <GlobalStyle />
        <main>
          <AppRoutes
            handleOpenTransactionModal={handleOpenTransactionModal}
            handleCloseTransactionModal={handleCloseTransactionModal}
          />
          <NewTransaction
            isOpen={transactionModalIsOpen}
            onClose={handleCloseTransactionModal}
          />
        </main>
      </ThemeProvider>
    </TransactionsProvider>
  )
}

export default App
