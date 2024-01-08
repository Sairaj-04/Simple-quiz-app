import React, { useState } from "react";

function calculateResults(answers) {
  let correctAnswers = 0;
  const totalQuestions = answers.length;

  answers.forEach((answer) => {
    if (answer.isCorrect) {
      correctAnswers++;
    }
  });

  const percentage = (correctAnswers / totalQuestions) * 100;
  return `${percentage.toFixed(0)}%`;
}

export function Results({ answers, retakeQuiz, returnHome }) {
  const score = calculateResults(answers);
  console.log(score);
  return (
    <div className="App">
      <div class="mt-4 p-5 bg-info text-white rounded">
        <h1>Your score is</h1>
        <h2>{score}</h2>
      </div>

      <button type="button" class="btn btn-primary my-5" onClick={returnHome}>
        Return Home
      </button>
    </div>
  );
}
