import { GlobalStyle } from './styles/GlobalStyle'
import { ThemeProvider } from './styles/ThemeProvider'
import { AppRoutes } from './AppRoutes'
import { AuthContextProvider } from './context/AuthContext'

function App() {
  return (
    <ThemeProvider>
      <AuthContextProvider>
        <GlobalStyle />
        <main>
          <AppRoutes />
        </main>
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App
