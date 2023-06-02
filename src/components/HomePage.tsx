import * as React from "react";
import { fetch_data } from "@actions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store";
import { Container, Grid } from "@mui/material";

const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const page = useSelector((state: RootState) => state.page);
  const list = useSelector((state: RootState) => state.list);
  const info = useSelector((state: RootState) => state.info);
  console.log(page, list);
  React.useEffect(() => {
    dispatch(fetch_data(1));
  }, []);

  return (
    <Container maxWidth={"lg"}>
      <Grid container>
        <Grid item xs={12}></Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
