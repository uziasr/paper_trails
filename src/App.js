import React from "react"
import logo from './logo.svg';
import './App.css';
import Projects from "./components/Projects"
import ProjectDetails from "./components/ProjectDetails"
import { Switch, Route } from "react-router-dom"
import OnBoard from "./components/onboarding/OnBoard"
import PrivateRoute from "./utils/PrivateRoute"
import CryptoTable from "./components/crypto/CryptoTable"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <PrivateRoute exact path={"/"} component={Projects} /> 
          <PrivateRoute path={"/projectDetails/:id"} component={ProjectDetails} />
          <PrivateRoute path={"/crypto"} component={CryptoTable} />
          <Route exact path={"/register"} component={OnBoard}/>
        </Switch>
      </header>
    </div>
  );
}

export default App;
