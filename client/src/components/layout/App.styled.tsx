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

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${constrainedContent}
  }
`;

const StyledMain = styled.main`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  flex: 1;
  padding: ${({ theme }) => theme.spacing(2)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${constrainedContent}
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.neutral};
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${constrainedContent}
  }
`;

export {
  StyledAppLayout as AppLayout,
  StyledHeader as Header,
  StyledFooter as Footer,
  StyledMain as Main,
};
