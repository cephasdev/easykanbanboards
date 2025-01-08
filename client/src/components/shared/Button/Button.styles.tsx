import { styled } from 'styled-components';
import { buttonStyles } from '../../../styles/fragments/buttons';

const StyledPrimaryButton = styled.button`
  ${buttonStyles}
`;

const StyledGhostButton = styled.button`
  ${buttonStyles}

  background-color: transparent;
`;

const StyledDangerButton = styled.button`
  ${buttonStyles}

  background-color: transparent;
  color: red;
  border-color: red;
`;

export { StyledPrimaryButton, StyledGhostButton, StyledDangerButton };
