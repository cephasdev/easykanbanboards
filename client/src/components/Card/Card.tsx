import { StyledCard, StyledCloseButton } from './Card.styles';

interface ICardProps {
  title: string;
  onDoubleClick: () => void;
  onCardCloseClicked: () => void;
  // TODO: add other required props.
}

const Card = ({ title, onDoubleClick, onCardCloseClicked }: ICardProps) => {
  return (
    <StyledCard
      onDoubleClick={() => {
        console.log('Card double clicked');
        onDoubleClick();
      }}
    >
      <StyledCloseButton
        aria-label="close card"
        className="close-card"
        onClick={onCardCloseClicked}
      />
      <h3>{title}</h3>
    </StyledCard>
  );
};

export default Card;
