import * as React from "react";
import { fetch_data } from "@actions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store";
import { Container, Grid } from "@mui/material";
import Pagination from "@components/Pagination";

const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const list = useSelector((state: RootState) => state.list);
  return (
    <Container maxWidth={"lg"}>
      <Grid container>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Pagination />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
