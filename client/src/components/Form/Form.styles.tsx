import { styled } from 'styled-components';

const StyledFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.background};
  max-width: 50rem;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const StyledInput = styled.input`
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const StyledErrorText = styled.span`
  color: ${({ theme }) => theme.colors.danger};
`;

export { StyledFormWrapper, StyledLabel, StyledInput, StyledErrorText };
