import React, { Component } from "react";
import * as api from "../api/api.js";
import "../style/Input.css";

class Input extends Component {
  state = {
    isError: false
  };

  render() {
    const { handleChange, currentPostcode, newPostcode } = this.props;
    const { isError } = this.state;

    return (
      <div>
        <div className="Input">
          <form onSubmit={this.handleSubmit}>
            <input
              className="postcode-entry"
              onChange={handleChange}
              value={currentPostcode}
              id="currentPostcode"
              type="text"
              placeholder="current postcode"
              autoComplete="off"
              required
            />
            <br />
            <input
              className="postcode-entry"
              onChange={handleChange}
              value={newPostcode}
              id="newPostcode"
              type="text"
              placeholder="new postcode"
              autoComplete="off"
              required
            />
            <br />
            <button className="postcode-submit">COMPARE CRIME</button>
          </form>
        </div>
        {isError && <div className="postcode-error">postcode not found</div>}
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();

    const { crimeLog, currentPostcode, newPostcode } = this.props;

    api.getLocations(currentPostcode, newPostcode).then(data => {
      const currentLocation = data[0].data.results[0]
        ? data[0].data.results[0].geometry.location
        : "";
      const newLocation = data[1].data.results[0]
        ? data[1].data.results[0].geometry.location
        : "";

      api
        .getCrimes(currentLocation, newLocation)
        .then(data => {
          const currentCrimes = data[0].data;
          const newCrimes = data[1].data;

          crimeLog(currentCrimes, newCrimes);
          this.setState({ isError: false });
        })
        .catch(error => this.setState({ isError: true }));
    });
  };
}

export default Input;
