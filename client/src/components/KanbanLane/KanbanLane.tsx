import { useDroppable } from '@dnd-kit/core';
import KanbanLaneTypes from '../../entities/enumerations/KanbanLaneTypes';
import {
  StyledKanbanLane,
  StyledKanbanLaneCardsHolder,
  StyledKanbanLaneHeader,
  StyledKanbanLaneHeaderActionButton,
  StyledKanbanLaneTitle,
} from './KanbanLane.styles';

interface IKanbanLaneProps {
  children?: React.ReactNode;
  title: string;
  type: KanbanLaneTypes;
  numberOfCards?: number;
  onCardAdded: (type: KanbanLaneTypes) => void;
}

const KanbanLane = ({
  children,
  title,
  type,
  numberOfCards,
  onCardAdded,
}: IKanbanLaneProps) => {
  // TODO: To prevent unnecessray rerenders, fetch the tasks directly from the global store, instead of receiving them as props.

  const { setNodeRef } = useDroppable({
    id: type,
  });

  return (
    <StyledKanbanLane variant={type}>
      <StyledKanbanLaneHeader>
        <StyledKanbanLaneTitle>{title}</StyledKanbanLaneTitle>
        {numberOfCards && <div>{`(${numberOfCards})`}</div>}
        <StyledKanbanLaneHeaderActionButton
          onClick={() => onCardAdded(type)}
          aria-label="add new card"
        />
      </StyledKanbanLaneHeader>
      <StyledKanbanLaneCardsHolder ref={setNodeRef}>
        {children}
      </StyledKanbanLaneCardsHolder>
    </StyledKanbanLane>
  );
};

export default KanbanLane;
