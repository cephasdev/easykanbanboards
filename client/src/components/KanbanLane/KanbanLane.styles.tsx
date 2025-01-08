import { styled } from 'styled-components';

const StyledKanbanLane = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
`;

const StyledKanbanLaneHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) =>
    theme.colors
      .primary}; // TODO: Load the color dynamically, based on a property.
  color: #fff;
`;

export { StyledKanbanLane, StyledKanbanLaneHeader };
