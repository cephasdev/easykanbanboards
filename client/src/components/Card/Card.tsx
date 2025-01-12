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
        onDoubleClick();
      }}
      style={style}
    >
      <StyledCloseButton
        aria-label="close card"
        className="close-card"
        onMouseDown={onCardCloseClicked}
      />
      <h3>{title}</h3>
    </StyledCard>
  );
};

export default Card;
