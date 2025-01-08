import { StyledKanbanLane, StyledKanbanLaneHeader } from './KanbanLane.styles';

interface IKanbanLaneProps {
  children?: React.ReactNode;
  title: string;
}

const KanbanLane = ({ children, title }: IKanbanLaneProps) => {
  return (
    <StyledKanbanLane>
      <StyledKanbanLaneHeader>{title}</StyledKanbanLaneHeader>
      {children}
    </StyledKanbanLane>
  );
};

export default KanbanLane;
