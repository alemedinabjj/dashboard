import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Sidebar } from './components/Sidebar/Sidebar'
import { DetailsExplorer } from './pages/DetailsExplorer/DetailsExplorer'
import { Explorer } from './pages/Explorer/Explorer'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { Notifications } from './pages/Notifications/Notifications'

export const AppRoutes = ({
  handleCloseTransactionModal,
  handleOpenTransactionModal,
  isOpen,
  notices,
}) => {

  const [user, setUser] = useState(null);

  const handleLoginData = () =>{
    
  }

  if (!user) {
   return  <Login />
  }

  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleCloseTransactionModal={handleCloseTransactionModal}
              handleOpenTransactionModal={handleOpenTransactionModal}
              isOpen={isOpen}
            />
          }
        />
        <Route path="/explore" element={<Explorer  />} />
        <Route path="/detailsexplorer/:id" element={<DetailsExplorer notices={notices} />} />
        <Route path="/messages" element={<h1>Messages</h1>} />
        <Route path="/bookmarks" element={<h1>Bookmarks</h1>} />
        <Route path="/lists" element={<h1>Lists</h1>} />
        <Route path="notifications" element={<Notifications />} />
      </Routes>
    </BrowserRouter>
  )
}
