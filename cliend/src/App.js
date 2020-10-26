import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Chat from './conponent/Chat'
import Join from './conponent/Join'

function App() {
  return (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path='/' component={Join}/>
        <Route path='/chat' component={Chat}/>
      </Switch>
    </Router>    
  </div>
  );
}

export default App;
