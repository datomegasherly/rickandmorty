import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store";
import { Container, Grid } from "@mui/material";
import Pagination from "@components/Pagination";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const list = useSelector((state: RootState) => state.list);
  return (
    <Container maxWidth={"xl"}>
      <Grid container>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} sx={{ mb: 2 }}>
          <Pagination firstRender={true} />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            {list.map((data: RootState["list"]) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={4} xl={3} sx={{ mb: 2 }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="100%"
                        image={data.image}
                        alt={data.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {data.name}
                        </Typography>
                        <TableContainer component={Paper}>
                          <Table aria-label="simple table">
                            <TableBody>
                              {Object.keys(data).map((row) => {
                                if (["id", "image"].indexOf(row) >= 0) return;
                                return (
                                  <TableRow
                                    key={row}
                                    sx={{
                                      "&:last-child td, &:last-child th": {
                                        border: 0,
                                      },
                                    }}
                                  >
                                    <TableCell component="th" scope="row">
                                      {row.toUpperCase()}
                                    </TableCell>
                                    <TableCell align="right">
                                      {data[row]}
                                    </TableCell>
                                  </TableRow>
                                );
                              })}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Pagination firstRender={false} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
