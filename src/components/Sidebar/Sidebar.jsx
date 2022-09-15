import * as S from './styles'
import { useState, useEffect, useContext } from 'react'
import { dataButtons } from './data'
import { Link, NavLink } from 'react-router-dom'
import { useRef } from 'react'
import { ToggleLeft, ToggleRight } from 'phosphor-react'
import { ThemeContext } from '../../styles/ThemeProvider'

import { useTransactions } from '../../context/useTransactions'

const LinkStyle = {
  textDecoration: 'none',
  color: 'inherit',
  width: '100%',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export const Sidebar = () => {
  const navRef = useRef(null)
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(true)
  const { summary } = useTransactions()

  const [darkMode, setDarkMode] = useState(false)

  const { theme, toggleTheme } = useContext(ThemeContext)

  const handleToggle = () => {
    setActive(!active)
  }

  const handleOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    handleOpen()
  }, [])

  return (
    <>
      <S.SidebarContainer
        className={open ? 'open' : 'close'}
        style={{
          backgroundColor: theme === 'light' ? 'white' : 'rgb(21, 32, 43)'
        }}
        border={
          theme === 'light'
            ? '1px solid rgb(230, 236, 240)'
            : '1px solid rgb(30, 45, 59)'
        }
      >
        <span className="openCloseButton" onClick={handleOpen} ref={navRef}>
          {open ? '⇦' : '⇨'}
        </span>
        <S.Content>
          <S.UserInfo>
            <img src="https://github.com/alemedinabjj.png" alt="" />
            <h2
              style={{
                display: open ? 'flex' : 'none',
                color: theme === 'light' ? 'black' : 'white'
              }}
            >
              Alexandre Medina
            </h2>
          </S.UserInfo>
          <S.ButtonGroup>
            {dataButtons.map(item => (
              <NavLink to={item.path} key={item.id} style={LinkStyle}>
                <S.Button
                  key={item.id}
                  className={
                    window.location.pathname === item.path ? 'active' : ''
                  }
                  background={
                    theme === 'light' ? 'rgb(29, 161, 242)' : ' rgb(30, 45, 59)'
                  }
                  onClick={handleToggle}
                >
                  {item.icon}
                  <p
                    style={{
                      display: open ? 'block' : 'none',
                      color: theme === 'light' ? 'black' : 'white'
                    }}
                  >
                    {item.label}
                  </p>

                  {summary.total < 0 && item?.haveNotification && (
                    <span className="notification">1</span>
                  )}
                </S.Button>
              </NavLink>
            ))}
          </S.ButtonGroup>
        </S.Content>
        <S.ConfigArea>
          <S.Button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <>
                <ToggleLeft
                  size={44}
                  style={{
                    color: theme === 'light' ? 'black' : 'white'
                  }}
                  onClick={toggleTheme}
                />
                <p
                  style={{
                    display: open ? 'block' : 'none',
                    color: theme === 'light' ? 'black' : 'white'
                  }}
                >
                  Light Mode
                </p>
              </>
            ) : (
              <>
                <ToggleRight
                  size={44}
                  onClick={toggleTheme}
                  style={{
                    color: theme === 'light' ? 'black' : 'white'
                  }}
                />
                <p
                  style={{
                    display: open ? 'block' : 'none',
                    color: theme === 'light' ? 'black' : 'white'
                  }}
                >
                  Dark Mode
                </p>
              </>
            )}
          </S.Button>
          <S.Button
            background={
              theme === 'light' ? 'rgb(29, 161, 242)' : 'rgb(30, 45, 59)'
            }
          >
            <img
              src="https://img.icons8.com/ios/50/000000/settings.png"
              alt=""
            />
            <p
              style={{
                display: open ? 'block' : 'none',
                color: theme === 'light' ? 'black' : 'white'
              }}
            >
              Logout
            </p>
          </S.Button>
        </S.ConfigArea>
      </S.SidebarContainer>
    </>
  )
}
