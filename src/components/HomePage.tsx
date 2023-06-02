import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store";
import { Container, Grid } from "@mui/material";
import Pagination from "@components/Pagination";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Paper, Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TableContainer from "@components/TableContainer";
import Search from "@components/Search";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const list = useSelector((state: RootState) => state.list);
  const loading = useSelector((state: RootState) => state.loading);
  const navigate = useNavigate();
  return (
    <Container maxWidth={"xl"}>
      <Grid container>
        <Grid item xs={12}>
          <Search />
        </Grid>
        <Grid item xs={12} sx={{ mb: 2 }}>
          <Pagination firstRender={true} />
        </Grid>
        <Grid item xs={12}>
          {list.length || !loading ? (
            list.length ? (
              <Grid container spacing={1}>
                {list.map((data: RootState["list"]) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={4}
                      xl={3}
                      sx={{ mb: 2 }}
                      key={data.id}
                    >
                      <Card
                        sx={{ maxWidth: 345 }}
                        onClick={() => {
                          navigate(`/${data.id}`);
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="100%"
                            image={data.image}
                            alt={data.name}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {data.name}
                            </Typography>
                            <TableContainer
                              component={Paper}
                              data={data}
                              keys={Object.keys(data)}
                              filter={["id", "image"]}
                            />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            ) : (
              <Grid container sx={{ textAlign: "center", mt: 2, mb: 2 }}>
                <Grid item xs={12}>
                  <ReportProblemIcon
                    sx={{ fontSize: "40pt", color: "lightgray" }}
                  />
                </Grid>
                <Grid item xs={12} sx={{ fontSize: "18pt" }}>
                  Oops!!
                </Grid>
                <Grid item xs={12}>
                  Nothing Found
                </Grid>
              </Grid>
            )
          ) : (
            <Grid container spacing={1}>
              {Array(6)
                .fill("skeleton")
                .map((data, i) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={4}
                      xl={3}
                      sx={{ mb: 2 }}
                      key={i}
                    >
                      <Card sx={{ maxWidth: 345, minHeight: 345 }}>
                        <CardActionArea>
                          <Skeleton
                            variant="rectangular"
                            width={"100%"}
                            height={200}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              <Skeleton />
                            </Typography>
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  );
                })}
            </Grid>
          )}
        </Grid>
        <Grid item xs={12}>
          <Pagination firstRender={false} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
