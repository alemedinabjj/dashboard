import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Explorer } from './pages/Explorer'
import { Home } from './pages/Home/Home'
import { Notifications } from './pages/Notifications/Notifications'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explorer />} />
        <Route path="/messages" element={<h1>Messages</h1>} />
        <Route path="/bookmarks" element={<h1>Bookmarks</h1>} />
        <Route path="/lists" element={<h1>Lists</h1>} />
        <Route path="notifications" element={<Notifications />} />
      </Routes>
    </BrowserRouter>
  )
}