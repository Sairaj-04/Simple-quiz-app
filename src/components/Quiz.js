import React, { useState } from "react";

export function Quiz({ selectedQuestions, submitQuiz, selectedCategory}) {
  const [answers, setAnswers] = useState(['', '', '', '', '']);

  const notAllAnswered = answers.some(ans => ans === '');

  return (
    <div>
      <div style={{paddingTop:'50px', paddingBottom:'50px', margin:'auto', display:'flex', flexDirection:'column', maxWidth:'500px'}}>
        <h1 className="my-5">{selectedCategory}</h1>
        {selectedQuestions.map((s, idx) => (
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">{`${idx + 1})  ${s.question}`}</h4>
              {s.answers.map((a, optIdx) => (
                <div key={optIdx} class="card bg-light text-dark">
                  <div class="card-body" 
                    style={{cursor:'pointer', backgroundColor: answers[idx].text === a.text ? 'lightblue' : 'transparent'}}
                    onClick={() => {
                      const updatedAnswers = [...answers];
                      updatedAnswers[idx] = a;
                      setAnswers(updatedAnswers);
                      console.log(updatedAnswers);
                    }}>
                    <b>{a.text}</b>
                  </div>
                </div>
              ))}
            </div>
            <br />
          </div>
        ))}
      </div>
      <button type="button" class="btn btn-secondary" style={{margin:"20px"}} onClick={() => setAnswers(['', '', '', '', ''])}>
          Clear
      </button>
      <button type="button" class="btn btn-primary" disabled={notAllAnswered} onClick={() => {if(!notAllAnswered) submitQuiz(answers)}}>
          Submit
      </button>
    </div>
  );
}
