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

export const LoadingText = styled.div`
  font-size: 14px;
  color: #666;
  font-weight: 500;
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export default StyledBoard;
