import { styled } from 'styled-components';
import { Close } from 'styled-icons/material';

const StyledCloseButton = styled(Close)`
  position: absolute;
  top: 0rem;
  right: 0rem;
  height: 1.5rem;
  cursor: pointer;
  padding: 0.2rem;
  border-radius: 50%;
  visibility: hidden;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const StyledCard = styled.div`
  position: relative;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1.5rem 1rem;
  margin: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.colors.textOnDark};
  cursor: grab;
  &:hover ${StyledCloseButton} {
    visibility: visible;
  }
  touch-action: none; // prevents issues on mobile devices, https://github.com/clauderic/dnd-kit/issues/435#issuecomment-905879502
`;

export { StyledCard, StyledCloseButton };
