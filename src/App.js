import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/globalstyle';
import Homepage from './pages/Homepage';
import LogineCadastro from './pages/LogineCadastro';
import Menucapa from './components/Menu/Menucapa';
import Menuresponsivo from './components/Menu/Menuresponsivo';
import Logado from './pages/Logado';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Menucapa />
        <Menuresponsivo />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/signup" component={LogineCadastro} />
          <Route exact path="/logado" component={Logado} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
