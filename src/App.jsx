import { GlobalStyle } from './styles/GlobalStyle'
import { ThemeProvider } from './styles/ThemeProvider'
import { AppRoutes } from './AppRoutes'
import { AuthContextProvider } from './context/AuthContext'
import { TransactionsProvider } from './context/useTransactions'
import { useState } from 'react'
import Modal from 'react-modal'
import { NewTransaction } from './components/newTransaction/NewTransaction'

import { useContext } from 'react'

Modal.setAppElement('#root')

function App() {
  const [transactionModalIsOpen, setTransactionModalIsOpen] = useState(false)

  const handleOpenTransactionModal = () => {
    setTransactionModalIsOpen(true)
  }

  const handleCloseTransactionModal = () => {
    setTransactionModalIsOpen(false)
  }

  return (
    <TransactionsProvider>
      <ThemeProvider>
        <AuthContextProvider>
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
        </AuthContextProvider>
      </ThemeProvider>
    </TransactionsProvider>
  )
}

export default App
