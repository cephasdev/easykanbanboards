import { CardStatus } from '../../entities/enumerations/CardStatus';
import KanbanLaneTypes from '../../entities/enumerations/KanbanLaneTypes';
import ICard from '../../entities/interfaces/ICard';
import Card from '../Card/Card';
import KanbanLane from '../KanbanLane/KanbanLane';
import StyledBoard from './Board.styles';

const cardsToDo: ICard[] = [
  {
    id: '1',
    title: 'Create a new project',
    description: 'Create a new project in Jira',
    status: CardStatus.TODO,
    createdBy: 'John Doe',
    assignedTo: 'Jane Doe',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
  },
];
const cardsInProgress: ICard[] = [];
const cardsDone: ICard[] = [];

const Board = () => {
  return (
    <StyledBoard>
      <KanbanLane title="To Do" type={KanbanLaneTypes.toDo}>
        {cardsToDo.map((card) => (
          <Card title={card.title}></Card>
        ))}
      </KanbanLane>
      <KanbanLane
        title="In Progress"
        type={KanbanLaneTypes.inProgress}
      ></KanbanLane>
      <KanbanLane title="Done" type={KanbanLaneTypes.done}></KanbanLane>
    </StyledBoard>
  );
};

export default Board;
