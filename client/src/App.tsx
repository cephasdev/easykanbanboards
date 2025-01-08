import { ThemeProvider } from 'styled-components';
import Board from './components/Board/Board';
import { theme } from './styles/theme';
import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>Welcome to Easy Kanban Boards.</h1>

      <Board />
    </ThemeProvider>
  );
}

export default App;
