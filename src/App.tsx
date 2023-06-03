import React from "react";
import "@css/base.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Loading from "@components/Loading";
import MainRouter from "@components/MainRouter";

const App = () => {
  return (
    <>
      <Loading />
      <Router>
        <MainRouter />
      </Router>
    </>
  );
};

export default App;
