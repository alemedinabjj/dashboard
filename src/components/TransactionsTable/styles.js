import styled from 'styled-components'

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;

  background: ${props => props.background};

  margin-top: 4rem;
  margin-bottom: 4rem;


  th {
    color: ${props => props.color};
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    background: ${props => props.background};
    color: var(--text-body);
    border-radius: 0.25rem;

    &:first-child {
      color: #363f5f;
    }

    &.deposit {
      color: green;
    }

    &.withdraw {
      color: red;
    }
  }
`

export const Button = styled.button`
  width: fit-content;
  height: 2.5rem;
  background: transparent;
  color: ${props => props.color};
  border: 0;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 600;
  padding: 0 2rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0 2rem;
`
