import styled from 'styled-components'

export const Container = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${props => props.background};
  color: ${props => props.color};


  h1 {
    margin-bottom: 2rem;
  }

`

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns:
   repeat(
      auto-fit,
      minmax(200px, 1fr)
    );
  grid-gap: 3rem;
  padding: 2rem;
  height: 40rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff9000;
  }

  &::-webkit-scrollbar-track {
    background-color: #cecece;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  //create a card with a shadow
  background: ${props => props.background};

  border-radius: 8px;
  padding: 15px;
  box-shadow:${props => props.shadow};
  transition: transform 0.2s;

  margin-top: 1.5rem;

  cursor: pointer;

  &:hover {
    transform: translateX(10px);
  }

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 8px;
  }
`
