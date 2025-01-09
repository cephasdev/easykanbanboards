import KanbanLaneTypes from '../../entities/enumerations/KanbanLaneTypes';
import {
  StyledKanbanLane,
  StyledKanbanLaneCardsHolder,
  StyledKanbanLaneHeader,
} from './KanbanLane.styles';

interface IKanbanLaneProps {
  children?: React.ReactNode;
  title: string;
  type: KanbanLaneTypes;
}

const KanbanLane = ({ children, title, type }: IKanbanLaneProps) => {
  return (
    <StyledKanbanLane variant={type}>
      <StyledKanbanLaneHeader>{title}</StyledKanbanLaneHeader>
      <StyledKanbanLaneCardsHolder>{children}</StyledKanbanLaneCardsHolder>
    </StyledKanbanLane>
  );
};

export default KanbanLane;
