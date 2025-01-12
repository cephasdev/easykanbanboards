import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('Modal Component', () => {
  const onCloseMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly when open', () => {
    render(
      <ThemeProvider theme={theme}>
        <Modal isOpen={true} onClose={onCloseMock}>
          <div>Modal Content</div>
        </Modal>
      </ThemeProvider>,
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  test('does not render when closed', () => {
    render(
      <ThemeProvider theme={theme}>
        <Modal isOpen={false} onClose={onCloseMock}>
          <div>Modal Content</div>
        </Modal>
      </ThemeProvider>,
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('calls onClose when overlay is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <Modal isOpen={true} onClose={onCloseMock}>
          <div>Modal Content</div>
        </Modal>
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByRole('dialog'));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test('does not call onClose when modal content is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <Modal isOpen={true} onClose={onCloseMock}>
          <div>Modal Content</div>
        </Modal>
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByText('Modal Content'));
    expect(onCloseMock).not.toHaveBeenCalled();
  });
});
