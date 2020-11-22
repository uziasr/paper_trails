import React from "react"
import logo from './logo.svg';
import './App.scss';
import Projects from "./components/Projects"
import ProjectDetails from "./components/ProjectDetails"
import { Switch, Route } from "react-router-dom"
import OnBoard from "./components/onboarding/OnBoard"
import PrivateRoute from "./utils/PrivateRoute"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <PrivateRoute exact path={"/"} component={Projects} /> 
          <PrivateRoute exact path={"/projectDetails"} component={ProjectDetails} />
          <Route exact path={"/register"} component={OnBoard}/>
        </Switch>
      </header>
    </div>
  );
}

export default App;
