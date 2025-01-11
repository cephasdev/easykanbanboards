import { styled } from 'styled-components';
import { buttonStyles } from '../../../styles/fragments/buttons';

const StyledPrimaryButton = styled.button`
  ${buttonStyles}
`;

const StyledGhostButton = styled.button`
  ${buttonStyles}

  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};
`;

const StyledDangerButton = styled.button`
  ${buttonStyles}

  background-color: transparent;
  color: ${({ theme }) => theme.colors.error};
  border-color: ${({ theme }) => theme.colors.error};
`;

export { StyledPrimaryButton, StyledGhostButton, StyledDangerButton };
