import React, { Component } from "react";
import CrimeFilter from "./CrimeFilter.js";
import DataVisualisation from "../components/DataVisualisation.js";
import "../style/Output.css";

class Output extends Component {
  state = {
    crimeCategory: "all crime"
  };

  render() {
    const { resetCrimes, currentCrimes, newCrimes } = this.props;
    const { crimeCategory } = this.state;

    return (
      <div>
        {currentCrimes.length !== 0 && (
          <div className="Output">
            <CrimeFilter
              chooseCrimeCategory={this.chooseCrimeCategory}
              currentCrimes={currentCrimes}
              newCrimes={newCrimes}
            />
            <DataVisualisation
              crimeCategory={crimeCategory}
              currentCrimes={currentCrimes}
              newCrimes={newCrimes}
            />
            <div className="chart-legend legend-current">CURRENT ADDRESS</div>
            <div className="chart-legend legend-new">NEW ADDRESS</div>
            <div onClick={resetCrimes} className="chart-legend legend-retry">
              TRY AGAIN
            </div>
          </div>
        )}
      </div>
    );
  }

  chooseCrimeCategory = crimeCategory => {
    this.setState({
      crimeCategory
    });
  };
}

export default Output;
