import { CardStatus } from '../../entities/CardStatus';
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
      <KanbanLane>
        {cardsToDo.map((card) => (
          <Card title={card.title}></Card>
        ))}
      </KanbanLane>
      <KanbanLane>In Progress</KanbanLane>
      <KanbanLane>Done</KanbanLane>
    </StyledBoard>
  );
};

export default Board;
