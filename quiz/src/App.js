import React, { useState } from "react";
import QuestionSection from "./components/QuestionSection";
import Results from "./components/Results";
import db from "./data/db.json";
import "./style/index.css";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleClick = (index) => {
    const correct = db[currentQuestion].correct;

    if (index === correct) {
      console.log("right", index);
      setScore(score + 1);
    } else console.log("wrong");

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < db.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="App">
      <>
        <h2>Test: come si fa la cacio e pepe?</h2>
        <h3>Rispondi alle domande</h3>
        {showResults ? (
          <Results data={db} score={score} />
        ) : (
          <div className="quiz">
            <QuestionSection
              data={db}
              currentQuestion={currentQuestion}
              handleClick={handleClick}
            />
          </div>
        )}
      </>
    </div>
  );
};

export default App;

// We have to track question number.
// Function runs on clicking next button.
// We have to keep track of all the answers selected by user, to calculate the score to show on result screen.
// Quiz question file, the same structure can be used in APIs.
