import { constrainedContent } from '../../styles/fragments/layout';
import { styled } from 'styled-components';

const StyledAppLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.neutral};
  color: ${({ theme }) => theme.colors.text};
  ${constrainedContent}
`;

const StyledMain = styled.main`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  flex: 1;
  ${constrainedContent}
`;

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.neutral};
  color: ${({ theme }) => theme.colors.text};
  ${constrainedContent}
`;

export {
  StyledAppLayout as AppLayout,
  StyledHeader as Header,
  StyledFooter as Footer,
  StyledMain as Main,
};
