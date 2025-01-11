import { StyledOverlay, StyledModalContainer } from './Modal.styles';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: IModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <StyledOverlay
      isOpen={isOpen}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <StyledModalContainer onClick={(e) => e.stopPropagation()}>
        {children}
      </StyledModalContainer>
    </StyledOverlay>
  );
};

export default Modal;
