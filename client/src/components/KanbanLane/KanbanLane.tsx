import StyledKanbanLane from './KanbanLane.styles';

const KanbanLane = ({ children }: { children: React.ReactNode }) => {
  return <StyledKanbanLane>{children}</StyledKanbanLane>;
};

export default KanbanLane;
