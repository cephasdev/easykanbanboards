import { css } from 'styled-components';

export const buttonStyles = css`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  border-width: 1px;
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
