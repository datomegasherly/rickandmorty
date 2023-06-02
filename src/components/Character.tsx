import { fetch_one, is_loading } from "@actions";
import { characterInterface } from "@queries";
import { AppDispatch } from "@store";
import * as React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Grid,
  CardMedia,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Skeleton,
  Button,
  Container,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TableContainer from "@components/TableContainer";
import TableWithHeader from "@components/TableWithHeader";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Character = () => {
  const [data, setData] = React.useState<characterInterface>({
    id: "0",
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    image: "",
  });
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();
  const fetch = async () => {
    dispatch(is_loading(true));
    const fetch_data = await fetch_one(userId);
    setData(fetch_data.character);
    dispatch(is_loading(false));
  };
  React.useEffect(() => {
    fetch();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [userId]);
  return (
    <Container maxWidth="xl">
      {data.name ? (
        <Grid container>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              startIcon={<ArrowBackIosNewIcon />}
              onClick={() => {
                navigate("/");
              }}
            >
              Back to Home
            </Button>
            <Paper sx={{ pt: 1, mt: 2 }}>
              <Grid container spacing={1} sx={{ p: 1 }}>
                <Grid item xs={3}>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={data.image}
                    alt={data.name}
                  />
                </Grid>
                <Grid item xs={9}>
                  <TableContainer
                    data={data}
                    keys={Object.keys(data)}
                    filter={["id", "image", "origin", "location", "episode"]}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sx={{ pt: 2 }}>
            <Paper>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} id="origin">
                  <Typography>ORIGIN</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {data.origin ? (
                      <Grid container>
                        <Grid item xs={12}>
                          <TableContainer
                            data={data.origin}
                            keys={Object.keys(data.origin)}
                            filter={["id", "residents"]}
                          />
                        </Grid>
                      </Grid>
                    ) : (
                      <></>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} id="Location">
                  <Typography>LOCATION</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {data.location ? (
                      <Grid container>
                        <Grid item xs={12}>
                          <TableContainer
                            data={data.location}
                            keys={Object.keys(data.location)}
                            filter={["id", "residents"]}
                          />
                        </Grid>
                      </Grid>
                    ) : (
                      <></>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} id="episode">
                  <Typography>EPISODE</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {data.episode ? (
                      <Grid container>
                        <Grid item xs={12}>
                          <TableWithHeader
                            data={data.episode}
                            rows={["name", "air_date", "episode"]}
                          />
                        </Grid>
                      </Grid>
                    ) : (
                      <></>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <Grid container>
          <Grid item xs={12}>
            <Paper>
              <Grid container spacing={1} sx={{ p: 1 }}>
                <Grid item xs={3}>
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height={"100%"}
                  />
                </Grid>
                <Grid item xs={9}>
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sx={{ pt: 2 }}>
            <Paper>
              <Accordion>
                <AccordionSummary
                  disabled
                  expandIcon={<ExpandMoreIcon />}
                  id="origin"
                >
                  <Typography>ORIGIN</Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  disabled
                  expandIcon={<ExpandMoreIcon />}
                  id="Location"
                >
                  <Typography>LOCATION</Typography>
                </AccordionSummary>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  disabled
                  expandIcon={<ExpandMoreIcon />}
                  id="episode"
                >
                  <Typography>EPISODE</Typography>
                </AccordionSummary>
              </Accordion>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Character;
