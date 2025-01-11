import { CardStatus } from '../../entities/enumerations/CardStatus';
import KanbanLaneTypes from '../../entities/enumerations/KanbanLaneTypes';
import Card from '../../components/Card/Card';
import KanbanLane from '../../components/KanbanLane/KanbanLane';
import StyledBoard from './Board.styles';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import Modal from '../../components/Modal/Modal';
import { useState } from 'react';

const Board = () => {
  const cards = useSelector((state: RootState) => state.cards.cards);
  const [isCardOpenForEditing, setIsCardOpenForEditing] =
    useState<boolean>(false);

  const onNewCardClicked = (type: KanbanLaneTypes) => {
    setIsCardOpenForEditing(true);
  };

  return (
    <>
      <StyledBoard>
        <KanbanLane
          title="To Do"
          type={KanbanLaneTypes.toDo}
          onCardAdded={onNewCardClicked}
        >
          {cards
            .filter((card) => card.status === CardStatus.TODO)
            .map((card) => (
              <Card title={card.title}></Card>
            ))}
        </KanbanLane>
        <KanbanLane
          title="In Progress"
          type={KanbanLaneTypes.inProgress}
          onCardAdded={onNewCardClicked}
        >
          {cards
            .filter((card) => card.status === CardStatus.IN_PROGRESS)
            .map((card) => (
              <Card title={card.title}></Card>
            ))}
        </KanbanLane>
        <KanbanLane
          title="Done"
          type={KanbanLaneTypes.done}
          onCardAdded={onNewCardClicked}
        >
          {cards
            .filter((card) => card.status === CardStatus.DONE)
            .map((card) => (
              <Card title={card.title}></Card>
            ))}
        </KanbanLane>
      </StyledBoard>

      <Modal
        isOpen={isCardOpenForEditing}
        onClose={() => setIsCardOpenForEditing(false)}
      >
        <h1>Modal Content</h1>
      </Modal>
    </>
  );
};

export default Board;
