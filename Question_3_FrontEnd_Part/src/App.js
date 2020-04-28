import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: ''
    }
    this.onHomeHandler = this.onHomeHandler.bind(this);
    this.onAboutHandler = this.onAboutHandler.bind(this);
    this.onContactHandler = this.onContactHandler.bind(this);
  }
  onHomeHandler() {
    Axios.get('http://localhost:8080/home')
      .then(response => this.setState({response:response.data}))
      .catch(error => this.setState({ response: error.message }))
  }

  onAboutHandler() {
    Axios.get('http://localhost:8080/about')
      .then(response => this.setState({response:response.data}))
      .catch(error => this.setState({ response: error.message }))
  }

  onContactHandler() {
    Axios.get('http://localhost:8080/contact')
      .then(response => this.setState({response:response.data}))
      .catch(error => this.setState({ response: error.message }))
  }

  render() {
    return (
      <div className="App">
        <ul>
          <li onClick={this.onHomeHandler}>Home</li>
          <li onClick={this.onAboutHandler}>About</li>
          <li onClick={this.onContactHandler}>Contact Us</li>
        </ul>
        <div>
          <h1> {this.state.response}</h1>
        </div>
      </div>
    );
  }
}

export default App;
