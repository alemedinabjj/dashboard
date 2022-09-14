import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  min-width: 300px;
  min-height: 100vh;
  background-color: rgb(21, 32, 43);
  position: sticky;
  top: 0;
  left: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  pointer-events: all;
  transition: all 0.3s ease-in-out;
  border-right: 1px solid #ccc;

  //create button to toggle sidebar open/close

  span {
    position: absolute;
    top: 40px;
    right: -10px;
    width: 24px;
    height: 24px;
    background-color: #a492ff;
    border-radius: 50%;
    z-index: 1;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #fff;
  }

  &.close {
    min-width: 10px;
    align-items: flex-start;

    &.open {
      min-width: 300px;
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
  justify-content: flex-start;

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
    transition: all 0.3s ease-in-out;
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

  background-color: transparent;
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
    background: ${props => props.background};
  }

  img {
    width: 30px;
    height: 30px;
  }

  &:hover {
    background: ${props => props.background};
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
