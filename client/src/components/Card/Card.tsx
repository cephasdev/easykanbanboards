import { StyledCard } from './Card.styles';

interface ICardProps {
  title: string;
  // TODO: add other required props.
}

const Card = ({ title }: ICardProps) => {
  return (
    <StyledCard>
      <h3>{title}</h3>
    </StyledCard>
  );
};

export default Card;
