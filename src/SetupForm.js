import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();

  return (
    <main>
      <section className="quiz quiz-small">
        <form onSubmit={handleSubmit} className="setup-form">
          <h2>De - Quiz</h2>
          <div className="form-control">
            <label htmlFor="amount">Number of Questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              className="form-input"
              value={quiz.amount}
              onChange={handleChange}
              min={1}
              max={50}
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="Sports">Sports</option>
              <option value="Politics">Politics</option>
              <option value="History">History</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="Difficulty">Select Difficulty level</label>
            <select
              name="Difficulty"
              id="Difficulty"
              className="form-input"
              value={quiz.Difficulty}
              onChange={handleChange}
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          {error && (
            <p className="error">
              Can't generate question, select different category
            </p>
          )}
        </form>
        <button className="submit-btn" onClick={handleSubmit}>
          Let's Start
        </button>
      </section>
    </main>
  );
};

export default SetupForm;
