import { useDraggable } from '@dnd-kit/core';
import { StyledCard, StyledCloseButton } from './Card.styles';

interface ICardProps {
  title: string;
  cardId: string;
  onDoubleClick: () => void;
  onCardCloseClicked: () => void;
  // TODO: add other required props.
}

const Card = ({
  title,
  cardId,
  onDoubleClick,
  onCardCloseClicked,
}: ICardProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: cardId,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <StyledCard
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      onDoubleClick={() => {
        console.log('Card double clicked');
        onDoubleClick();
      }}
      style={style}
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
