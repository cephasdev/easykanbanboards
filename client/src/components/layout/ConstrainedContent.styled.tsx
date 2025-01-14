import { constrainedContent } from '../../styles/fragments/layout';
import { styled } from 'styled-components';

// const ConstrainedContent = styled.div`
//   width: ${({ theme }) => theme.spacing(300)};
//   margin: 0 auto;
//   padding: 0 1rem;
// `;

const ConstrainedContent = styled.div`
  ${constrainedContent}
`;

export default ConstrainedContent;
