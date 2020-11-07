import React from "react"
import logo from './logo.svg';
import './App.scss';
import Projects from "./components/Projects"
import ProjectDetails from "./components/ProjectDetails"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Projects />
        {/* <ProjectDetails/> */}
      </header>
    </div>
  );
}

export default App;
