import * as S from './styles'
import { useState } from 'react'
import { dataButtons } from './data'
import { Link, NavLink } from 'react-router-dom'

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
  const [active, setActive] = useState(false)

  const handleToggle = () => {
    setActive(!active)
  }

  return (
    <>
      <S.SidebarContainer>
        <S.Content>
          <S.UserInfo>
            <img src="https://github.com/alemedinabjj.png" alt="" />
            <h2>Alexandre Medina</h2>
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
                  <img src={item.icon} alt={item.label} />
                  {item.label}
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
            Dark Mode
          </S.Button>
          <S.Button>
            <img
              src="https://img.icons8.com/ios/50/000000/settings.png"
              alt=""
            />
            Logout
          </S.Button>
        </S.ConfigArea>
      </S.SidebarContainer>
    </>
  )
}
