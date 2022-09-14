import { Sidebar } from './components/Sidebar/Sidebar'
import { GlobalStyle } from './styles/GlobalStyle'
import { ThemeProvider } from './styles/ThemeProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Explorer } from './pages/Explorer'

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <main>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explorer />} />
            <Route path="/messages" element={<h1>Messages</h1>} />
            <Route path="/bookmarks" element={<h1>Bookmarks</h1>} />
          </Routes>
        </BrowserRouter>
      </main>
    </ThemeProvider>
  )
}

export default App
