import React from "react";

export function Home({ categories, setSelectedQuestions, setSelectedCategory }) {
  return (
    <div>
      <h1 className="my-5">Select a category from below for quiz</h1>
      {categories.map((c, idx) => (
        <div onClick={() => {
          setSelectedQuestions(c.questions); 
          setSelectedCategory(c.category);
          }} 
          key = {idx} class="card bg-light text-dark" style={{ margin:'auto', display:'flex', flexDirection:'column', maxWidth:'500px', cursor:'pointer'}}>
          <div class="card-body"><b>{c.category}</b></div>
        </div>
      ))}
    </div>
  );
}
