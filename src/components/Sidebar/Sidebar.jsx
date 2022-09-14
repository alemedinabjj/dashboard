import * as S from './styles'
import { useState, useEffect } from 'react'
import { dataButtons } from './data'
import { Link, NavLink } from 'react-router-dom'
import { useRef } from 'react'

const LinkStyle = {
  textDecoration: 'none',
  color: 'inherit',
  width: '100%',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  isActived: {
    backgroundColor: 'rgb(29, 161, 242)',
    color: 'white'
  }
}

export const Sidebar = () => {
  const navRef = useRef(null)
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(true)

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
      <S.SidebarContainer className={open ? 'open' : 'close'}>
        <span onClick={handleOpen} ref={navRef}></span>
        <S.Content>
          <S.UserInfo>
            <img src="https://github.com/alemedinabjj.png" alt="" />
            <h2
              style={{
                display: open ? 'block' : 'none'
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
                  onClick={handleToggle}
                >
                  <img src={item.icon} alt="" />
                  <p
                    style={{
                      display: open ? 'block' : 'none'
                    }}
                  >
                    {item.label}
                  </p>
                </S.Button>
              </NavLink>
            ))}
          </S.ButtonGroup>
        </S.Content>
        <S.ConfigArea>
          <S.Button>
            <img
              src="https://img.icons8.com/ios/50/000000/settings.png"
              alt=""
            />
            <p
              style={{
                display: open ? 'block' : 'none'
              }}
            >
              Dark Mode
            </p>
          </S.Button>
          <S.Button>
            <img
              src="https://img.icons8.com/ios/50/000000/settings.png"
              alt=""
            />
            <p
              style={{
                display: open ? 'block' : 'none'
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
