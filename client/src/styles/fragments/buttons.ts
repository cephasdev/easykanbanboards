import { css } from 'styled-components';

export const buttonStyles = css`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: 0.8;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
