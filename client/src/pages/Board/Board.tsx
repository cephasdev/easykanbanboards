import { CardStatus } from '../../entities/enumerations/CardStatus';
import KanbanLaneTypes from '../../entities/enumerations/KanbanLaneTypes';
import Card from '../../components/Card/Card';
import KanbanLane from '../../components/KanbanLane/KanbanLane';
import StyledBoard from './Board.styles';
import { AppDispatch, RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../components/Modal/Modal';
import { useState } from 'react';
import CardForm from '../../components/Form/CardForm';
import { addCard } from '../../features/cards/cards-slice';

const Board = () => {
  const [isCardOpenForEditing, setIsCardOpenForEditing] =
    useState<boolean>(false);
  const [typeOfCardOpenedForEditing, setTypeOfCardOpenedForEditing] =
    useState<KanbanLaneTypes>(KanbanLaneTypes.toDo);
  const cards = useSelector((state: RootState) => state.cards.cards);
  const dispatch = useDispatch<AppDispatch>();

  const onNewCardClicked = (type: KanbanLaneTypes) => {
    setTypeOfCardOpenedForEditing(type);
    setIsCardOpenForEditing(true);
  };

  const onSubmit = (values: Record<string, string>) => {
    console.log('Board: Child form submitted');
    let newCardStatus = CardStatus.TODO;
    if (typeOfCardOpenedForEditing === KanbanLaneTypes.inProgress) {
      newCardStatus = CardStatus.IN_PROGRESS;
    } else if (typeOfCardOpenedForEditing === KanbanLaneTypes.done) {
      newCardStatus = CardStatus.DONE;
    }

    dispatch(
      addCard({
        id: '5',
        title: values.cardTitle,
        description: '',
        status: newCardStatus,
        createdBy: '1',
        assignedTo: '1',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }),
    );
    setIsCardOpenForEditing(false);
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
              <Card title={card.title} key={card.id}></Card>
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
              <Card title={card.title} key={card.id}></Card>
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
              <Card title={card.title} key={card.id}></Card>
            ))}
        </KanbanLane>
      </StyledBoard>

      <Modal
        isOpen={isCardOpenForEditing}
        onClose={() => setIsCardOpenForEditing(false)}
      >
        <h1>Modal Content</h1>
        <CardForm
          initialValues={{ cardTitle: '' }}
          onSubmit={onSubmit}
          onClose={() => setIsCardOpenForEditing(false)}
        />
      </Modal>
    </>
  );
};

export default Board;
