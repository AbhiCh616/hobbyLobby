import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LogIn from './components/logIn'
import SignUp from './components/signUp'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route path="/" exact component={LogIn} />
        <Route path="/signup" exact component={SignUp} />
      </Router>
    </React.Fragment>
  );
}

export default App;
