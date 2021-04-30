import React, { useContext } from "react";

import ConfirmForm from "./components/confirm/ConfirmForm";

import Loading from "./components/Loading/index";
import { AppContext } from "./AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const App = (props) => {
  const {
    appState: { loading, confirming },
    appState,
  } = useContext(AppContext);
  if (loading) return <Loading />;
  return (
    <>
      <ToastContainer />
      <ConfirmForm />
    </>
  );
};

export default App;
