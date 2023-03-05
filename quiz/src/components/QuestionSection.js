import React from "react";

const QuestionSection = ({ data, currentQuestion, handleClick }) => {
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
