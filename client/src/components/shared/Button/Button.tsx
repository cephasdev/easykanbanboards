import { StyledPrimaryButton } from './Button.styles';

const Button = ({ children }: { children: React.ReactNode }) => {
  return <StyledPrimaryButton>{children}</StyledPrimaryButton>;
};

export default Button;
