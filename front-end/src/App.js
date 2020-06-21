import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LogIn from './components/logIn'
import SignUp from './components/signUp'
import Feed from './components/feed'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    }
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://localhost:8000/core/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username })
        })
    }
  }

  handle_login = (e, data) => {
    e.preventDefault()
    fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token)
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username
        })
      })
  }

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/core/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        })
      })
  }

  handle_logout = () => {
    localStorage.removeItem('token')
    this.setState({ logged_in: false, username: '' })
  }

  display_form = form => {
    this.setState({
      displayed_form: form
    })
  }

  render() {
    if (this.state.logged_in)
      return (
        this.state.logged_in && <Feed handle_logout={this.handle_logout} />
      )
    return (
      <React.Fragment>
        <Router>
          <Route path="/" exact render={(props => (<LogIn {...props} handle_login={this.handle_login} />))} />
          <Route path="/signup" exact render={(props => (<SignUp {...props} handle_signup={this.handle_signup} />))} />
        </Router>
      </React.Fragment>
    )
  }
}

export default App;