import { render, screen, fireEvent } from '@testing-library/react';
import CardForm from './CardForm';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('CardForm Component', () => {
  const initialValues = { cardTitle: '' };
  const onSubmit = jest.fn();
  const onClose = jest.fn();

  test('should render the CardForm component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CardForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          onClose={onClose}
        />
      </ThemeProvider>,
    );
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
  });

  test('should call onSubmit with correct values when form is submitted', () => {
    render(
      <ThemeProvider theme={theme}>
        <CardForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          onClose={onClose}
        />
      </ThemeProvider>,
    );
    const input = screen.getByLabelText(/title/i);
    fireEvent.change(input, { target: { value: 'Test Title' } });
    fireEvent.click(screen.getByText(/save/i));
    expect(onSubmit).toHaveBeenCalledWith({ cardTitle: 'Test Title' });
  });

  test('should call onClose when cancel button is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <CardForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          onClose={onClose}
        />
      </ThemeProvider>,
    );
    fireEvent.click(screen.getByText(/cancel/i));
    expect(onClose).toHaveBeenCalled();
  });

  test('should call onClose when Escape key is pressed', () => {
    render(
      <ThemeProvider theme={theme}>
        <CardForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          onClose={onClose}
        />
      </ThemeProvider>,
    );
    const input = screen.getByLabelText(/title/i);
    fireEvent.keyDown(input, { key: 'Escape', code: 'Escape' });
    expect(onClose).toHaveBeenCalled();
  });

  test('should display validation error when title is empty', () => {
    render(
      <ThemeProvider theme={theme}>
        <CardForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          onClose={onClose}
        />
      </ThemeProvider>,
    );
    fireEvent.click(screen.getByText(/save/i));
    expect(screen.getByText(/title is required/i)).toBeInTheDocument();
  });
});
