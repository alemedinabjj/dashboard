import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  min-height: 100vh;
  width: 100%;

  background: ${props => props.background};
  color: ${props => props.color};
  transition: background 0.2s, color 0.2s;

`

export const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.color};
  line-height: 56px;
  margin-top: 80px;
`

export const SubTitle = styled.h2`
  font-size: 24px;
  color: ${props => props.color};
  line-height: 56px;
  margin-top: 80px;
`

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  padding: 0 2rem;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  //create a card with a shadow
  background: ${props => props.background};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  margin-top: 1.5rem;

  &:hover {
    transform: translateX(10px);
  }
`

export const HeaderCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const CardTitle = styled.h2`
  font-size: 24px;
  color: ${props => props.color};
  max-width: 450px;
  line-height: 56px;
  font-weight: 100;

  display: flex;
  align-self: flex-start;
  justify-self: flex-start;
`

export const CardValue = styled.h2`
  font-size: 34px;
  color: ${props => props.color};
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`
