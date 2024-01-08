import "./App.css";
import { categories } from "../helpers/questions";
import React from "react";
import { Home } from "./Home";
import { Quiz } from "./Quiz";
import { Results } from "./Results";
import { useState } from "react";
import { useEffect } from "react";

export function App() {
  const [view, setView] = useState("home");

  const [selectedQuestions, setSelectedQuestions] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [answers, setAnswers] = useState(null);

  useEffect(() => {
    if (!selectedQuestions) {
      setView("home");
      return;
    }
    setView("quiz");
  }, [selectedQuestions]);

  return (
    <div className="App">
      {view === "home" && (
        <Home
          categories={categories}
          setSelectedQuestions={setSelectedQuestions}
          setSelectedCategory={setSelectedCategory}
        />
      )}

      {view === "quiz" && selectedQuestions.length && (
        <Quiz
          submitQuiz={(answers) => {
            setAnswers(answers);
            setView("results");
          }}
          selectedQuestions={selectedQuestions}
          selectedCategory={selectedCategory}
        />
      )}

      {view === "results" && answers && (
        <Results
          answers={answers}
          retakeQuiz={() => {
            setView("quiz");
          }}
          returnHome={() => {
            setAnswers(null);
            setSelectedQuestions(null);
            setSelectedCategory(null);
            setView("Home");
          }}
        />
      )}
    </div>
  );
}
