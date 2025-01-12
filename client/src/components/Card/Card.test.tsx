import { render, screen } from '@testing-library/react';
import Card from './Card';
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
});
