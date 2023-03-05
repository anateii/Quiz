import React from "react";

const Results = ({ data, score }) => {
  const scoreMessages = [
    "Non sai proprio fare la cacio e pepe",
    "Non ci siamo",
    "Devi studiare di più, ci sei quasi",
    "Bravo, sai fare la cacio e pepe",
  ];

  return (
    <div className="results">
      <h2>
        Hai risposto correttamente a {score} domande su {data.length}
      </h2>
      <h1>{scoreMessages[score]}</h1>
    </div>
  );
};

export default Results;
