import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;

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
`;
