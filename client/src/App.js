import React, { Component } from "react";
import "./App.css";
import MainPage from "./components/FormularioCadastro/MainPage";
import Navbar from "./components/FormularioCadastro/Navbar";

class App extends Component {
  render() {
    return (
      <>
        <Navbar component="article" maxWidth="sm" />
        <MainPage />
      </>
    );
  }
}

//function aoEnviarForm(dados) {
//  console.log(dados);
//}

export default App;

/*
import { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import MainComponent from "./MainComponent";

function App() {
  return (
    <Router>
      <Fragment>
        <header className="header">
          <div>This is a multicontainer application</div>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other page</Link>
        </header>
        <div className="main">
          <Route exact path="/" component={MainComponent} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </Fragment>
    </Router>
  );
}

 <Container component="article" maxWidth="sm">
            <Typography variant="h3" component="h1" align="center">
              Formulário de cadastro
            </Typography>
            <ValidacoesCadastro.Provider
              value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}
            >
              <FormularioCadastro aoEnviar={aoEnviarForm} />
            </ValidacoesCadastro.Provider>

export default App;
*/