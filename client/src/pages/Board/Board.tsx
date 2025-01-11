import { CardStatus } from '../../entities/enumerations/CardStatus';
import KanbanLaneTypes from '../../entities/enumerations/KanbanLaneTypes';
import Card from '../../components/Card/Card';
import KanbanLane from '../../components/KanbanLane/KanbanLane';
import StyledBoard from './Board.styles';
import { AppDispatch, RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../components/Modal/Modal';
import { useEffect, useState } from 'react';
import CardForm from '../../components/Form/CardForm';
import { addCard, updateCard } from '../../features/cards/cards-slice';

const Board = () => {
  const [isCardOpenForEditing, setIsCardOpenForEditing] =
    useState<boolean>(false);
  const [typeOfCardOpenedForEditing, setTypeOfCardOpenedForEditing] =
    useState<KanbanLaneTypes>(KanbanLaneTypes.toDo);
  const [idOfCardOpenedForEditing, setIdOfCardOpenedForEditing] =
    useState<string>('');
  const [editFormInitialValues, setEditFormInitialValues] = useState<
    Record<string, string>
  >({ cardTitle: '' });
  const cards = useSelector((state: RootState) => state.cards.cards);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!isCardOpenForEditing) {
      setIdOfCardOpenedForEditing('');
      setEditFormInitialValues({ cardTitle: '' });
    }
  }, [isCardOpenForEditing]);

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

    if (idOfCardOpenedForEditing) {
      console.log('Editing card: ', idOfCardOpenedForEditing);
      dispatch(
        updateCard({
          id: idOfCardOpenedForEditing,
          title: values.cardTitle,
          description: '',
          status: newCardStatus,
          createdBy: '1',
          assignedTo: '1',
          createdAt: new Date().toISOString(), // TODO: keep the original date
          updatedAt: new Date().toISOString(),
        }),
      );
    } else {
      dispatch(
        addCard({
          id: Math.round(Math.random() * 100).toString(),
          title: values.cardTitle,
          description: '',
          status: newCardStatus,
          createdBy: '1',
          assignedTo: '1',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }),
      );
    }
    setIsCardOpenForEditing(false);
  };

  const openCardForEditing = (id: string) => {
    setEditFormInitialValues({
      cardTitle: cards.find((card) => card.id === id)?.title || '',
    });
    console.log('Open card for editing, id: ', id);
    setIdOfCardOpenedForEditing(id);
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
              <Card
                title={card.title}
                key={card.id}
                onDoubleClick={() => {
                  openCardForEditing(card.id);
                }}
              ></Card>
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
              <Card
                title={card.title}
                key={card.id}
                onDoubleClick={() => {
                  openCardForEditing(card.id);
                }}
              ></Card>
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
              <Card
                title={card.title}
                key={card.id}
                onDoubleClick={() => {
                  openCardForEditing(card.id);
                }}
              ></Card>
            ))}
        </KanbanLane>
      </StyledBoard>

      <Modal
        isOpen={isCardOpenForEditing}
        onClose={() => setIsCardOpenForEditing(false)}
      >
        <h1>Modal Content</h1>
        <CardForm
          initialValues={editFormInitialValues}
          onSubmit={onSubmit}
          onClose={() => {
            setIsCardOpenForEditing(false);
            setEditFormInitialValues({ cardTitle: '' });
          }}
        />
      </Modal>
    </>
  );
};

export default Board;
