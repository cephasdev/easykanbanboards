import styled from 'styled-components';
import { fadeIn } from '../../styles/fragments/animations';

interface IOverlayProps {
  isOpen: boolean;
}

const StyledOverlay = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isOpen'].includes(prop),
})<IOverlayProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 25rem;
  transform: translate(-50%, -50%);
  z-index: 101;
  background-color: #fff;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.spacing(2)};
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export { StyledOverlay, StyledModalContainer };
