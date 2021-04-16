import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './common/Navbar/Navbar';
import Instructions from './components/Instructions/Instructions';
import QuizContainer from './components/QuizContainer/QuizContainer';

function App() {
  return (
    <div className="app-container">
      <Navbar title="Spot the fake"/>
      <div className="content-container">
          <Switch>
              <Route exact path="/" component={Instructions}/>
              <Route exact path="/quiz" component={QuizContainer}/>
          </Switch>
        </div>
    </div>
  );
}

export default App;
