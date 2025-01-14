import { ThemeProvider } from 'styled-components';
import Board from './pages/Board/Board';
import { theme } from './styles/theme';
import GlobalStyles from './styles/globalStyles';
import { Provider } from 'react-redux';
import { store } from './state/store';
import {
  AppLayout,
  Footer,
  Header,
  Main,
} from './components/layout/App.styled';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppLayout>
          <Header>
            <h1>Easy Kanban Boards.</h1>
          </Header>

          <Main>
            <Board />
          </Main>

          <Footer>Copyright: Dragan Radic, {new Date().getFullYear()}</Footer>
        </AppLayout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
