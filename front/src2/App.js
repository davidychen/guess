import React, { Component } from "react";
import Login from "./components/Login/Login";
import Guess from "./components/Guess/Guess";
import "./App.css";

class App extends Component {

  constructor(){
    super();
    this.state = {
      loggedIn: false,
      email: ""
    };
  }

  renderLogin() {
    return(
      <Login 
        onLogin={result => {
          this.setState({loggedIn: true, email: result});
        }}
      />
    );
  }

  renderApp() {
    return(
      <Guess email={this.state.email}/>
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.loggedIn ? 
          this.renderApp() :
          this.renderLogin() }
      </div>
    );
  }
}

export default App;
