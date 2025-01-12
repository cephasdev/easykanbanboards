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
