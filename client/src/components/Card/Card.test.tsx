import { render, screen } from '@testing-library/react';
import Card from './Card';
// import '@testing-library/jest-dom'; // this worked!

describe('Card Component', () => {
  test('should render the Card component', () => {
    // Arrange
    const onDoubleClick = jest.fn();
    const onCardCloseClicked = jest.fn();
    const cardTitle = 'Test card title';
    // Act
    render(
      <Card
        title={cardTitle}
        cardId={''}
        onDoubleClick={onDoubleClick}
        onCardCloseClicked={onCardCloseClicked}
      />,
    );
    // Assert
    const el = screen.getByText(cardTitle);
    expect(el).toBeInTheDocument();
  });
});
