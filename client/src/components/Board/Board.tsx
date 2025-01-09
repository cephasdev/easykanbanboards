import { CardStatus } from '../../entities/enumerations/CardStatus';
import KanbanLaneTypes from '../../entities/enumerations/KanbanLaneTypes';
import Card from '../Card/Card';
import KanbanLane from '../KanbanLane/KanbanLane';
import StyledBoard from './Board.styles';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';

const Board = () => {
  const cards = useSelector((state: RootState) => state.cards.cards);

  return (
    <StyledBoard>
      <KanbanLane title="To Do" type={KanbanLaneTypes.toDo}>
        {cards
          .filter((card) => card.status === CardStatus.TODO)
          .map((card) => (
            <Card title={card.title}></Card>
          ))}
      </KanbanLane>
      <KanbanLane title="In Progress" type={KanbanLaneTypes.inProgress}>
        {cards
          .filter((card) => card.status === CardStatus.IN_PROGRESS)
          .map((card) => (
            <Card title={card.title}></Card>
          ))}
      </KanbanLane>
      <KanbanLane title="Done" type={KanbanLaneTypes.done}>
        {cards
          .filter((card) => card.status === CardStatus.DONE)
          .map((card) => (
            <Card title={card.title}></Card>
          ))}
      </KanbanLane>
    </StyledBoard>
  );
};

export default Board;
