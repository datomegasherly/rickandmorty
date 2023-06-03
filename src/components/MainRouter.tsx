import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "@css/base.scss";
import HomePage from "@components/HomePage";
import Character from "@components/Character";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path=":userId" element={<Character />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
