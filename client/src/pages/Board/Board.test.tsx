import 'jest-styled-components';
import { render, screen, fireEvent } from '@testing-library/react';
import Board from './Board';
import { CardStatus } from '../../entities/enumerations/CardStatus';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import {
  useGetAllCardsQuery,
  useAddCardMutation,
  useUpdateCardMutation,
  useDeleteCardMutation,
} from '../../state/api/api-slice';

// Mock the API hooks
jest.mock('../../state/api/api-slice', () => ({
  useGetAllCardsQuery: jest.fn(),
  useAddCardMutation: jest.fn(),
  useUpdateCardMutation: jest.fn(),
  useDeleteCardMutation: jest.fn(),
}));

describe('Board Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useGetAllCardsQuery as jest.Mock).mockReturnValue({
      data: {
        data: {
          getAllCards: [
            { id: '1', title: 'Test Card 1', status: CardStatus.TODO },
            { id: '2', title: 'Test Card 2', status: CardStatus.IN_PROGRESS },
            { id: '3', title: 'Test Card 3', status: CardStatus.DONE },
          ],
        },
      },
      error: null,
      isLoading: true,
    });
    (useAddCardMutation as jest.Mock).mockReturnValue([jest.fn()]);
    (useUpdateCardMutation as jest.Mock).mockReturnValue([jest.fn()]);
    (useDeleteCardMutation as jest.Mock).mockReturnValue([jest.fn()]);
  });

  test('renders loading state initially', () => {
    render(
      <ThemeProvider theme={theme}>
        <Board />
      </ThemeProvider>,
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders lanes with correct titles and card counts', () => {
    render(
      <ThemeProvider theme={theme}>
        <Board />
      </ThemeProvider>,
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
      <ThemeProvider theme={theme}>
        <Board />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getAllByLabelText('add new card')[0]);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test('opens card for editing when card is double-clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <Board />
      </ThemeProvider>,
    );

    fireEvent.doubleClick(screen.getByText('Test Card 1'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Test Card 1')).toBeInTheDocument();
  });
});
