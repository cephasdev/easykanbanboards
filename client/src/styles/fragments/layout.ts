import { css } from 'styled-components';

const constrainedContent = css`
  padding-left: calc(50% - ${({ theme }) => theme.spacing(150)});
  padding-right: calc(50% - ${({ theme }) => theme.spacing(150)});
`;

export { constrainedContent };
