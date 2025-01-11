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
  return (
    <StyledKanbanLane variant={type}>
      <StyledKanbanLaneHeader>
        <StyledKanbanLaneTitle>{title}</StyledKanbanLaneTitle>
        {numberOfCards && <div>{`(${numberOfCards})`}</div>}
        <StyledKanbanLaneHeaderActionButton onClick={() => onCardAdded(type)} />
      </StyledKanbanLaneHeader>
      <StyledKanbanLaneCardsHolder>{children}</StyledKanbanLaneCardsHolder>
    </StyledKanbanLane>
  );
};

export default KanbanLane;
