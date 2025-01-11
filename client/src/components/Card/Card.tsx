import { StyledCard } from './Card.styles';

interface ICardProps {
  title: string;
  onDoubleClick: () => void;
  // TODO: add other required props.
}

const Card = ({ title, onDoubleClick }: ICardProps) => {
  return (
    <StyledCard
      onDoubleClick={() => {
        console.log('Card double clicked');
        onDoubleClick();
      }}
    >
      <h3>{title}</h3>
    </StyledCard>
  );
};

export default Card;
