import React from "react"
import logo from './logo.svg';
import './App.scss';
import Projects from "./components/Projects"
import ProjectDetails from "./components/ProjectDetails"
import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path={"/projects"} component={Projects} /> 
          <Route path={"/projectDetails"} component={ProjectDetails} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
