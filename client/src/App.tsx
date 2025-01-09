import { ThemeProvider } from 'styled-components';
import Board from './components/Board/Board';
import { theme } from './styles/theme';
import GlobalStyles from './styles/globalStyles';
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <h1>Welcome to Easy Kanban Boards.</h1>

        <Board />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
