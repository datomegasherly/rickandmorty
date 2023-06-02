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
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@store";

const App = () => {
  const loading = useSelector((state: RootState) => state.loading);
  return (
    <>
      {loading ? (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: "#c9c9c9c9",
            zIndex: 3,
          }}
        >
          <Box className="spinner-container">
            <Box className="loading-spinner"></Box>
          </Box>
        </Box>
      ) : (
        <></>
      )}
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path=":userId" element={<Character />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
