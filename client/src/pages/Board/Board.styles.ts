import { styled } from 'styled-components';

const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: ${({ theme }) => theme.spacing(2)};
  flex: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: row;
  }
`;

export default StyledBoard;
