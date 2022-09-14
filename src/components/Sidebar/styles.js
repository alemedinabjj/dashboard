import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  min-width: 300px;
  min-height: 100vh;
  background-color: #242625;
  position: sticky;
  top: 0;
  left: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; 
  pointer-events: all;
  transition: all 0.3s ease-in-out;

  //create button to toggle sidebar open/close

  span {
    position: absolute;
    top: 40px;
    right: -10px;
    width: 24px;
    height: 24px;
    background-color: #A492FF;
    border-radius: 50%;
    z-index: 1;
    cursor: pointer;
  }

  &.close {
    min-width: 10px;
    span {
      right: -10px;
    }
  }


`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-bottom: 5rem;

  gap: 1rem;

  img {
    width: 60px;
    height: 60px;
    border-radius: 8px;
  }

  h2 {
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;

  }
`

export const ButtonGroup = styled.div`
  width: 100%;
  padding-block: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const Button = styled.button`
  width: 100%;
  height: 40px;

 
  background-color:${props => props.active ? '#1f1f1f' : 'transparent'};
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding-inline: 1.3rem;
  padding-block: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  

  &.active {
    background-color: #1f1f1f;
  }

  img {
    width: 30px;
    height: 30px;
  }

  &:hover {
    background-color: #1f1f1f;
  }
`

export const ConfigArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;
  align-self: flex-end;


`

export const DarkMode = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  img {
    width: 30px;
    height: 30px;
  }
`
