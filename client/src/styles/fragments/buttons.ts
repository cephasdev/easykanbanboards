import { css } from 'styled-components';

export const buttonStyles = css`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;
