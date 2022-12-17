import {ThemeProvider} from '@mui/system';
import theme from './styles/index';
import Header from './components/Header';
import Banner from './components/Banner';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Banner />
      <Content />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
