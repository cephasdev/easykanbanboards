import { render, screen } from '@testing-library/react';
import Card from './Card';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('Card Component', () => {
  test('should render the Card component', () => {
    // Arrange
    const onDoubleClick = jest.fn();
    const onCardCloseClicked = jest.fn();
    const cardTitle = 'Test card title';
    // Act
    render(
      <ThemeProvider theme={theme}>
        <Card
          title={cardTitle}
          cardId={''}
          onDoubleClick={onDoubleClick}
          onCardCloseClicked={onCardCloseClicked}
        />
      </ThemeProvider>,
    );
    // Assert
    const el = screen.getByText(cardTitle);
    expect(el).toBeInTheDocument();
  });
});

test('when the card is double clicked, the onDoubleClick function should be called', () => {
  // Arrange
  const onDoubleClick = jest.fn();
  const onCardCloseClicked = jest.fn();
  const cardTitle = 'Test card title';
  // Act
  render(
    <ThemeProvider theme={theme}>
      <Card
        title={cardTitle}
        cardId={''}
        onDoubleClick={onDoubleClick}
        onCardCloseClicked={onCardCloseClicked}
      />
    </ThemeProvider>,
  );
  // Assert
  const el = screen.getByText(cardTitle);
  el.dispatchEvent(new MouseEvent('dblclick', { bubbles: true }));
  expect(onDoubleClick).toHaveBeenCalled();
});

test('when the close button is clicked, the onCardCloseClicked function should be called', () => {
  // Arrange
  const onDoubleClick = jest.fn();
  const onCardCloseClicked = jest.fn();
  const cardTitle = 'Test card title';
  // Act
  render(
    <ThemeProvider theme={theme}>
      <Card
        title={cardTitle}
        cardId={''}
        onDoubleClick={onDoubleClick}
        onCardCloseClicked={onCardCloseClicked}
      />
    </ThemeProvider>,
  );
  // Assert
  const closeButton = screen.getByLabelText('close card');
  closeButton.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
  expect(onCardCloseClicked).toHaveBeenCalled();
});

test('should apply transform style when card is dragged', () => {
  // Arrange
  const onDoubleClick = jest.fn();
  const onCardCloseClicked = jest.fn();
  const cardTitle = 'Test card title';
  const cardId = 'test-card-id';
  // Act
  render(
    <ThemeProvider theme={theme}>
      <Card
        title={cardTitle}
        cardId={cardId}
        onDoubleClick={onDoubleClick}
        onCardCloseClicked={onCardCloseClicked}
      />
    </ThemeProvider>,
  );
  // Assert
  const card = screen.getByText(cardTitle).parentElement;
  console.log({ card: card?.style });
  // if (card) {
  //   fireEvent.mouseDown(card);
  //   expect(card).toHaveStyle('transform: translate(0px, 0px)');
  //   // fireEvent.mouseUp(card);
  // }
  card?.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
  expect(card).toHaveStyle('transform: translate(0px, 0px)');
});
