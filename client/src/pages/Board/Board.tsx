import { CardStatus } from '../../entities/enumerations/CardStatus';
import KanbanLaneTypes from '../../entities/enumerations/KanbanLaneTypes';
import Card from '../../components/Card/Card';
import KanbanLane from '../../components/KanbanLane/KanbanLane';
import StyledBoard from './Board.styles';
import { AppDispatch, RootState } from '../../state/store';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../components/Modal/Modal';
import { useEffect, useState } from 'react';
import CardForm from '../../components/Form/CardForm';
import {
  addCard,
  removeCard,
  updateCard,
  updateCardStatus,
} from '../../state/cards/cards-slice';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import {
  useAddCardMutation,
  useDeleteCardMutation,
  useGetAllCardsQuery,
  useUpdateCardMutation,
} from '../../state/api/api-slice';
// import ICard from '@/entities/interfaces/ICard';

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
  // const cards = useSelector((state: RootState) => state.cards.cards);
  const dispatch = useDispatch<AppDispatch>();

  const { data, error, isLoading } = useGetAllCardsQuery();
  const cards = data?.data.getAllCards ?? [];
  console.log({
    data,
    cards,
  });

  const [addCard] = useAddCardMutation();
  const [updateCard] = useUpdateCardMutation();
  const [deleteCard] = useDeleteCardMutation();

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
      // dispatch(
      //   updateCard({
      //     id: idOfCardOpenedForEditing,
      //     title: values.cardTitle,
      //     description: '',
      //     status: newCardStatus,
      //     createdBy: '1',
      //     assignedTo: '1',
      //     createdAt: new Date().toISOString(), // TODO: keep the original date
      //     updatedAt: new Date().toISOString(),
      //   }),
      // );
      updateCard({
        id: idOfCardOpenedForEditing,
        title: values.cardTitle,
        description: '',
        status: newCardStatus,
        assignedTo: '1', // TODO: keep the original
      });
    } else {
      // dispatch(
      //   addCard({
      //     id: Math.round(Math.random() * 100).toString(),
      //     title: values.cardTitle,
      //     description: '',
      //     status: newCardStatus,
      //     createdBy: '1',
      //     assignedTo: '1',
      //     createdAt: new Date().toISOString(),
      //     updatedAt: new Date().toISOString(),
      //   }),
      // );
      addCard({
        title: values.cardTitle,
        description: '',
        status: newCardStatus,
        createdBy: '1',
      });
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

  const onCardDelete = async (id: string) => {
    console.log('Delete card', id);
    // dispatch(removeCard(id));
    const result = await deleteCard(id).unwrap();
  };

  const onDragEnd = (ev: DragEndEvent) => {
    const { active, over } = ev;

    if (!active || !over) {
      return;
    }

    const draggedCardId = active.id as string;
    const targetLaneType = over.id as KanbanLaneTypes;

    let newCardStatus = CardStatus.TODO;
    if (targetLaneType === KanbanLaneTypes.inProgress) {
      newCardStatus = CardStatus.IN_PROGRESS;
    } else if (targetLaneType === KanbanLaneTypes.done) {
      newCardStatus = CardStatus.DONE;
    }

    // // dispatch(
    // //   updateCardStatus({
    // //     id: draggedCardId,
    // //     status: newCardStatus,
    // //   }),
    // // );
    // // // const {data, error, isLoading} = useUpdateCardMutation();
    // await updateCardStatus({
    const card = cards.find((card) => card.id === draggedCardId);
    const result = updateCard({
      id: draggedCardId,
      title: card?.title || '',
      description: card?.description || '',
      status: newCardStatus,
      assignedTo: card?.assignedTo || '',
    }).unwrap();
  };

  return (
    <DndContext onDragEnd={onDragEnd}>
      <StyledBoard>
        <KanbanLane
          title="To Do"
          type={KanbanLaneTypes.toDo}
          numberOfCards={
            cards.filter((card) => card.status === CardStatus.TODO).length
          }
          onCardAdded={onNewCardClicked}
        >
          {cards
            .filter((card) => card.status === CardStatus.TODO)
            .map((card) => (
              <Card
                title={card.title}
                cardId={card.id}
                key={card.id}
                onDoubleClick={() => {
                  openCardForEditing(card.id);
                }}
                onCardCloseClicked={() => onCardDelete(card.id)}
              ></Card>
            ))}
        </KanbanLane>
        <KanbanLane
          title="In Progress"
          type={KanbanLaneTypes.inProgress}
          numberOfCards={
            cards.filter((card) => card.status === CardStatus.IN_PROGRESS)
              .length
          }
          onCardAdded={onNewCardClicked}
        >
          {cards
            .filter((card) => card.status === CardStatus.IN_PROGRESS)
            .map((card) => (
              <Card
                title={card.title}
                key={card.id}
                cardId={card.id}
                onDoubleClick={() => {
                  openCardForEditing(card.id);
                }}
                onCardCloseClicked={() => onCardDelete(card.id)}
              ></Card>
            ))}
        </KanbanLane>
        <KanbanLane
          title="Done"
          type={KanbanLaneTypes.done}
          numberOfCards={
            cards.filter((card) => card.status === CardStatus.DONE).length
          }
          onCardAdded={onNewCardClicked}
        >
          {cards
            .filter((card) => card.status === CardStatus.DONE)
            .map((card) => (
              <Card
                title={card.title}
                key={card.id}
                cardId={card.id}
                onDoubleClick={() => {
                  openCardForEditing(card.id);
                }}
                onCardCloseClicked={() => onCardDelete(card.id)}
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
    </DndContext>
  );
};

export default Board;
