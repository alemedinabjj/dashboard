import { GlobalStyle } from "./styles/GlobalStyle";
import { AppRoutes } from "./AppRoutes";
import { TransactionsProvider } from "./context/useTransactions";
import { useState } from "react";
import Modal from "react-modal";
import { NewTransaction } from "./components/newTransaction/NewTransaction";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Login } from "./pages/Login/Login";
import { ThemeContext } from "./styles/ThemeProvider";

Modal.setAppElement("#root");

function App() {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);

  const [transactionModalIsOpen, setTransactionModalIsOpen] = useState(false);

  const handleOpenTransactionModal = () => {
    setTransactionModalIsOpen(true);
  };

  const handleCloseTransactionModal = () => {
    setTransactionModalIsOpen(false);
  };

  if (!user) {
    return <Login />;
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <main
        style={{
          background: theme === "light" ? "white" : "rgb(21, 32, 43)",
          color: theme === "light" ? "black" : "white",
        }}
      >
        <AppRoutes
          handleOpenTransactionModal={handleOpenTransactionModal}
          handleCloseTransactionModal={handleCloseTransactionModal}
        />
        <NewTransaction
          isOpen={transactionModalIsOpen}
          onClose={handleCloseTransactionModal}
        />
      </main>
    </TransactionsProvider>
  );
}

export default App;
