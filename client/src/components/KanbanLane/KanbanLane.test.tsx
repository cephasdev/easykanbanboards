import { render, screen, fireEvent } from '@testing-library/react';
import KanbanLane from './KanbanLane';
import KanbanLaneTypes from '../../entities/enumerations/KanbanLaneTypes';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('KanbanLane Component', () => {
  const onCardAddedMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders lane with correct title and number of cards', () => {
    render(
      <ThemeProvider theme={theme}>
        <KanbanLane
          title="To Do"
          type={KanbanLaneTypes.toDo}
          numberOfCards={3}
          onCardAdded={onCardAddedMock}
        >
          <div>Card 1</div>
          <div>Card 2</div>
          <div>Card 3</div>
        </KanbanLane>
      </ThemeProvider>,
    );

    expect(screen.getByText('To Do')).toBeInTheDocument();
    expect(screen.getByText('(3)')).toBeInTheDocument();
    expect(screen.getByText('Card 1')).toBeInTheDocument();
    expect(screen.getByText('Card 2')).toBeInTheDocument();
    expect(screen.getByText('Card 3')).toBeInTheDocument();
  });

  test('calls onCardAdded when add card button is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <KanbanLane
          title="To Do"
          type={KanbanLaneTypes.toDo}
          numberOfCards={3}
          onCardAdded={onCardAddedMock}
        >
          <div>Card 1</div>
          <div>Card 2</div>
          <div>Card 3</div>
        </KanbanLane>
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByLabelText('add new card'));
    expect(onCardAddedMock).toHaveBeenCalledTimes(1);
    expect(onCardAddedMock).toHaveBeenCalledWith(KanbanLaneTypes.toDo);
  });

  test('renders lane without number of cards when numberOfCards is not provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <KanbanLane
          title="To Do"
          type={KanbanLaneTypes.toDo}
          onCardAdded={onCardAddedMock}
        >
          <div>Card 1</div>
          <div>Card 2</div>
          <div>Card 3</div>
        </KanbanLane>
      </ThemeProvider>,
    );

    expect(screen.getByText('To Do')).toBeInTheDocument();
    expect(screen.queryByText('(3)')).not.toBeInTheDocument();
    expect(screen.getByText('Card 1')).toBeInTheDocument();
    expect(screen.getByText('Card 2')).toBeInTheDocument();
    expect(screen.getByText('Card 3')).toBeInTheDocument();
  });
});
