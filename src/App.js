import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/globalstyle";
import Homepage from "./pages/Homepage";
import LogineCadastro from "./pages/LogineCadastro";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/signup" component={LogineCadastro} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
