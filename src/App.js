import React from 'react';
import './app.css';
import { Router } from "@reach/router";
import Navigation from './components/Navigation';
import CreateTask from './components/CreateTask';
import ScoreTask from './components/ScoreTask';
import Display from './components/Display';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Router>
        <Main path='/'/>
        <CreateTask path='/createtask'/>
        <ScoreTask path='/scoretask'/>
        <Display path='/display'/>
      </Router>
    </div>
  );
}

export default App;

