import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const {
    loading,
    waiting,
    isModalOpen,
    questions,
    index,
    error,
    correct,
    handleNextQuestion,
  } = useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }

  if (loading) {
    return <Loading />;
  }

  const { question, correct_answer, incorrect_answers } = questions[index];
  const answers = [...incorrect_answers, correct_answer];

  return (
    <main>
      <section className="quiz">
        <p className="correct-answers">
          Correct Answers : {correct} of {index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          {/* <div className="btn-container"> */}
          {answers.map((answer, index) => {
            return (
              <button
                className="answer-btn"
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            );
          })}
        </article>
        <button className="next-question" onClick={handleNextQuestion}>
          next question
        </button>
      </section>
    </main>
  );
}

export default App;
