import { css, styled } from 'styled-components';
import KanbanLaneTypes from '../../entities/enumerations/KanbanLaneTypes';
import { StyledCard } from '../Card/Card.styles';

// https://www.npmjs.com/package/styled-icons
// https://styled-icons.dev/

interface IKanbanLaneProps {
  variant: KanbanLaneTypes;
}

const StyledKanbanLane = styled.div<IKanbanLaneProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
  ${({ variant, theme }) => {
    switch (variant) {
      case KanbanLaneTypes.toDo:
        return css`
          ${StyledKanbanLaneHeader} {
            background-color: ${theme.colors.kanbanTypes.toDo.header};
          }
          ,
          ${StyledKanbanLaneCardsHolder} {
            background-color: ${theme.colors.kanbanTypes.toDo.background};
          }
          ${StyledCard} {
            background-color: ${theme.colors.kanbanTypes.toDo.card};
          }
        `;
      case KanbanLaneTypes.inProgress:
        return css`
          ${StyledKanbanLaneHeader} {
            background-color: ${theme.colors.kanbanTypes.inProgress.header};
          }
          ,
          ${StyledKanbanLaneCardsHolder} {
            background-color: ${theme.colors.kanbanTypes.inProgress.background};
          }
          ${StyledCard} {
            background-color: ${theme.colors.kanbanTypes.toDo.card};
          }
        `;
      case KanbanLaneTypes.done:
        return css`
          ${StyledKanbanLaneHeader} {
            background-color: ${theme.colors.kanbanTypes.done.header};
          }
          ,
          ${StyledKanbanLaneCardsHolder} {
            background-color: ${theme.colors.kanbanTypes.done.background};
          }
          ${StyledCard} {
            background-color: ${theme.colors.kanbanTypes.toDo.card};
          }
        `;
      default:
        return theme.colors.primary;
    }
  }}
`;

const StyledKanbanLaneHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: #fff;
`;

const StyledKanbanLaneCardsHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: #fff;
`;

export {
  StyledKanbanLane,
  StyledKanbanLaneHeader,
  StyledKanbanLaneCardsHolder,
};
