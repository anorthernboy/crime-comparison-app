import React, { Component } from "react";
import "./style/App.css";
import Header from "./components/Header.js";
import InputBody from "./components/InputBody.js";
import OutputBody from "./components/OutputBody.js";

class App extends Component {
  state = {
    currentPostcode: "",
    newPostcode: "",
    currentCrimes: [],
    newCrimes: []
  };

  render() {
    const {
      currentPostcode,
      newPostcode,
      currentCrimes,
      newCrimes
    } = this.state;

    return (
      <div className="App">
        <Header resetCrimes={this.resetCrimes} />
        <InputBody
          handleChange={this.handleChange}
          crimeLog={this.crimeLog}
          currentPostcode={currentPostcode}
          newPostcode={newPostcode}
        />
        <OutputBody
          resetCrimes={this.resetCrimes}
          currentCrimes={currentCrimes}
          newCrimes={newCrimes}
        />
      </div>
    );
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  crimeLog = (currentCrimes, newCrimes) => {
    this.setState({
      currentCrimes,
      newCrimes
    });
  };

  resetCrimes = () => {
    this.setState({
      currentPostcode: "",
      newPostcode: "",
      currentCrimes: [],
      newCrimes: []
    });
  };
}

export default App;
