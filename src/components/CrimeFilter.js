import React, { Component } from "react";
import "../style/CrimeFilter.css";

class CrimeFilter extends Component {
  render() {
    const { currentCrimes, newCrimes } = this.props;
    const allCrimeCategories = [
      "all crime",
      ...new Set(currentCrimes.concat(newCrimes).map(crime => crime.category))
    ];

    return (
      <div className="CrimeFilter">
        <form onChange={this.handleChange}>
          <select name="crimes">
            {allCrimeCategories.map(crime => (
              <option value={crime} key={crime}>
                {crime.replace(/-/gi, " ")}
              </option>
            ))}
          </select>
        </form>
      </div>
    );
  }

  handleChange = event => {
    event.preventDefault();
    const { chooseCrimeCategory } = this.props;
    chooseCrimeCategory(event.target.value);
  };
}

export default CrimeFilter;
