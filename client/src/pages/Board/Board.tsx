import { CardStatus } from '../../entities/enumerations/CardStatus';
import KanbanLaneTypes from '../../entities/enumerations/KanbanLaneTypes';
import Card from '../../components/Card/Card';
import KanbanLane from '../../components/KanbanLane/KanbanLane';
import StyledBoard from './Board.styles';
import Modal from '../../components/Modal/Modal';
import { useEffect, useState } from 'react';
import CardForm from '../../components/Form/CardForm';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import {
  useAddCardMutation,
  useDeleteCardMutation,
  useGetAllCardsQuery,
  useUpdateCardMutation,
} from '../../state/api/api-slice';

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
      updateCard({
        id: idOfCardOpenedForEditing,
        title: values.cardTitle,
        description: '',
        status: newCardStatus,
        assignedTo: '1', // TODO: keep the original
      });
    } else {
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
    const cardStatus = cards.find((card) => card.id === id)?.status;
    let kanbanLaneType = KanbanLaneTypes.toDo;
    if (cardStatus === CardStatus.IN_PROGRESS) {
      kanbanLaneType = KanbanLaneTypes.inProgress;
    } else if (cardStatus === CardStatus.DONE) {
      kanbanLaneType = KanbanLaneTypes.done;
    }
    setTypeOfCardOpenedForEditing(kanbanLaneType);
    setEditFormInitialValues({
      cardTitle: cards.find((card) => card.id === id)?.title || '',
    });
    setIdOfCardOpenedForEditing(id);
    setIsCardOpenForEditing(true);
  };

  const onCardDelete = async (id: string) => {
    console.log('Delete card', id);
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

    const card = cards.find((card) => card.id === draggedCardId);

    const cardStatusShouldChange = card?.status !== newCardStatus;
    if (!cardStatusShouldChange) {
      return;
    }

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
