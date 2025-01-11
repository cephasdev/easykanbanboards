import { styled } from 'styled-components';

const StyledFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  max-width: 50rem;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const StyledErrorText = styled.span`
  color: ${({ theme }) => theme.colors.danger};
`;

export { StyledFormWrapper, StyledLabel, StyledInput, StyledErrorText };
