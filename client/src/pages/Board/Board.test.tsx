import 'jest-styled-components';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Board from './Board';
import { CardStatus } from '../../entities/enumerations/CardStatus';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

const mockStore = configureStore([]);
const initialState = {
  cards: {
    cards: [
      { id: '1', title: 'Test Card 1', status: CardStatus.TODO },
      { id: '2', title: 'Test Card 2', status: CardStatus.IN_PROGRESS },
      { id: '3', title: 'Test Card 3', status: CardStatus.DONE },
    ],
  },
};

describe('Board Component', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('renders lanes with correct titles and card counts', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Board />
        </ThemeProvider>
        ,
      </Provider>,
    );

    expect(screen.getByText('To Do')).toBeInTheDocument();
    expect(screen.getByText('In Progress')).toBeInTheDocument();
    expect(screen.getByText('Done')).toBeInTheDocument();

    expect(screen.getAllByText('Test Card 1').length).toBe(1);
    expect(screen.getAllByText('Test Card 2').length).toBe(1);
    expect(screen.getAllByText('Test Card 3').length).toBe(1);
  });

  test('opens modal with form when new card button is clicked', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Board />
        </ThemeProvider>
      </Provider>,
    );

    fireEvent.click(screen.getAllByLabelText('add new card')[0]);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test('opens card for editing when card is double-clicked', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Board />
        </ThemeProvider>
      </Provider>,
    );

    fireEvent.doubleClick(screen.getByText('Test Card 1'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Test Card 1')).toBeInTheDocument();
  });
});
