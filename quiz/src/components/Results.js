import React from "react";

//  "Non sai proprio fare la cacio e pepe",
//     "Non ci siamo",
//     "Devi studiare di più, ci sei quasi",
//     "Bravo, sai fare la cacio e pepe",

const Results = ({ data, score }) => {
  const scoreMessages = [
    {
      scoreRange: [0],
      message: "Non sai proprio fare la cacio e pepe",
    },
    { scoreRange: [1], message: "Non ci siamo" },
    {
      scoreRange: [2],
      message: "Devi studiare di più, ci sei quasi",
    },
    {
      scoreRange: [3],
      message: "Bravo, sai fare la cacio e pepe!",
    },
  ];

  const finalScoreMessage = scoreMessages.find(({ scoreRange }) =>
    scoreRange.includes(score)
  )?.message;

  return (
    <div className="results">
      <h2>
        Hai risposto correttamente a {score} domande su {data.length}
      </h2>
      {finalScoreMessage && <h1>{finalScoreMessage}</h1>}
    </div>
  );
};

export default Results;
