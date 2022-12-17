import {ThemeProvider} from '@mui/system';
import theme from './styles/index';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
