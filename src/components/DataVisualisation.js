import React from "react";
import { Doughnut } from "react-chartjs-2";
import "../style/DataVisualisation.css";

const DataVisualisation = ({ crimeCategory, currentCrimes, newCrimes }) => {
  const currentCrimesTally = crimesTally(currentCrimes);
  const newCrimesTally = crimesTally(newCrimes);

  const allData = {
    labels: ["CURRENT ADDRESS", "NEW ADDRESS"],

    datasets: [
      {
        data: [currentCrimes.length, newCrimes.length],
        backgroundColor: ["Coral", "FireBrick"],
        hoverBackgroundColor: ["#ff8d5c	", "#c1332d"],
        borderWidth: 0
      }
    ]
  };

  const filteredData = {
    labels: ["CURRENT ADDRESS", "NEW ADDRESS"],

    datasets: [
      {
        data: [
          currentCrimesTally[crimeCategory]
            ? currentCrimesTally[crimeCategory]
            : 0 /
              (newCrimesTally[crimeCategory]
                ? newCrimesTally[crimeCategory]
                : 0 + currentCrimesTally[crimeCategory]
                ? currentCrimesTally[crimeCategory]
                : 0),
          newCrimesTally[crimeCategory]
            ? newCrimesTally[crimeCategory]
            : 0 /
              (newCrimesTally[crimeCategory]
                ? newCrimesTally[crimeCategory]
                : 0 + currentCrimesTally[crimeCategory]
                ? currentCrimesTally[crimeCategory]
                : 0)
        ],
        backgroundColor: ["Coral", "FireBrick"],
        hoverBackgroundColor: ["#ff8d5c	", "#c1332d"],
        borderWidth: 0
      }
    ]
  };

  return (
    <div>
      {crimeCategory === "all crime" && (
        <div className="DataVisualisation">
          <Doughnut
            data={allData}
            options={{
              cutoutPercentage: 15,
              rotation: 0.5 * Math.PI,
              legend: {
                display: false
              }
            }}
          />
        </div>
      )}

      {crimeCategory !== "all crime" && (
        <div className="DataVisualisation">
          <Doughnut
            data={filteredData}
            options={{
              cutoutPercentage: 15,
              rotation: 0.5 * Math.PI,
              legend: {
                display: false
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

const crimesTally = crimes => {
  return crimes.reduce((acc, curr) => {
    if (acc[curr.category]) {
      acc[curr.category]++;
      return acc;
    } else {
      acc[curr.category] = 1;
      return acc;
    }
  }, {});
};

export default DataVisualisation;
