import { styled } from 'styled-components';

const StyledBoard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: ${({ theme }) => theme.spacing(2)};
  flex: 1;
`;

export default StyledBoard;
