import { ThemeProvider } from 'styled-components';
import Board from './pages/Board/Board';
import { theme } from './styles/theme';
import GlobalStyles from './styles/globalStyles';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { AppLayout } from './components/layout/App.styled';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppLayout>
          <h1>Welcome to Easy Kanban Boards.</h1>

          <Board />
        </AppLayout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
