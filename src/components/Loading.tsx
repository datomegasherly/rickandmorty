import React from "react";
import "@css/base.scss";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@store";

const Loading = () => {
  const loading = useSelector((state: RootState) => state.loading);
  return loading ? (
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
  );
};

export default Loading;
