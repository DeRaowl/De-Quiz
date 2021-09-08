import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import Modal from "./Modal";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

const url = "";

const tempUrl =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);

  const [isModalOpen, setIsModelOpen] = useState(false);

  const fetchQuestions = async (url) => {
    setLoading(true);
    setWaiting(false);
    const response = await axios(url).catch((err) => console.log(err));
    if (response) {
      const data = response.data.results;
      if (data.length > 0) {
        setQuestions(data);
        setWaiting(false);
        setLoading(false);
        setError(false);
      } else {
        setWaiting(true);
        setLoading(false);
      }
    } else {
      setWaiting(true);
    }
  };

  const handleNextQuestion = () => {
    setIndex((prevValue) => {
      let newIndex = prevValue + 1;
      if (newIndex > questions.length - 1) {
        // setIsModelOpen(true);
        return 0;
      } else {
        return newIndex;
      }
    });
  };

  useEffect(() => {
    fetchQuestions(tempUrl);
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        waiting,
        questions,
        index,
        correct,
        error,
        isModalOpen,
        handleNextQuestion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
