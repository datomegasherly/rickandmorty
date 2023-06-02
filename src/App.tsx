import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "@css/base.scss";
import HomePage from "@components/HomePage";
import Character from "@components/Character";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="character" element={<Character />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
