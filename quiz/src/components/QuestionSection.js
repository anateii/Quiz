import React from "react";

const QuestionSection = ({ data, currentQuestion, handleClick }) => {
  // console.log("This is current question", currentQuestion);
  //console.log("This is data current Index", data[currentQuestion].correct);

  return (
    <>
      <div>
        Domanda {currentQuestion + 1}/{data.length}
      </div>
      <div className="question">{data[currentQuestion].question}</div>

      {data[currentQuestion].answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className="answer"
        >
          {answer}
        </button>
      ))}
    </>
  );
};

export default QuestionSection;
