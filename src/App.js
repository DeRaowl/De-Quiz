import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const { loading, waiting, isModalOpen, question, index, error } =
    useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }

  if (loading) {
    return <Loading />;
  }

  return <main>quiz</main>;
}

export default App;
