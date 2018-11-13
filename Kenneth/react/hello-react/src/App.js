import React, { Component } from 'react';
import lightning from "./kachow.jpeg";
import './App.css';

class App extends Component {
  state = {
    car: lightning,
    divStyle: {
      backgroundColor: "white"
    }
  };

  changeColor = () => {
    let colors = ["red", "blue", "green", "yellow", "purple"];
    this.setState({
      divStyle: {
        backgroundColor: colors[Math.floor(Math.random() * 6)]
      }
    });
  };

  render() {
    return (
      <div className="hello" style={ this.state.divStyle }>
        <img className="pic" src={ this.state.car } alt="lightning mcqueen"></img>
        <button className="btn" onClick={ this.changeColor }>Change Background Color</button>
      </div>
    );
  }
}

export default App;
