import { Box, Button, Grid, InputBase } from "@mui/material";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { AppDispatch } from "@store";
import { useDispatch } from "react-redux";
import { fetch_data, pre_search } from "@actions";
import CancelIcon from "@mui/icons-material/Cancel";

const SearchBtn = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const Search = () => {
  const dispatch: AppDispatch = useDispatch();
  const [latestRef, setLatestRef] = React.useState<string>("");
  const clickEvent = (bypass?: boolean) => {
    const value = ref.current.querySelector("input").value;
    if ((value && latestRef !== value) || bypass) {
      setLatestRef(value);
      dispatch(pre_search());
      dispatch(fetch_data(1, value));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const ref = React.useRef(null);
  return (
    <Grid container>
      <Grid
        item
        md={3}
        lg={4}
        sx={{ display: { xs: "none", sm: "none", md: "block" } }}
      >
        {" "}
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={4}
        sx={{ m: "auto", textAlign: "center", mt: 1, mb: 2 }}
      >
        <SearchBtn>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search"
            ref={ref}
            onKeyDown={(ev: React.KeyboardEvent) => {
              if (ev.key === "Enter") {
                clickEvent();
              }
            }}
          />
          <Box sx={{ position: "absolute", right: 0, top: 0 }}>
            {latestRef ? (
              <Box
                sx={{
                  m: "auto",
                  position: "absolute",
                  right: 100,
                  top: 7,
                  color: "#ff7070",
                  cursor: "pointer",
                  ":hover": { color: "#717171" },
                  transition: "all 0.2s ease-in-out",
                }}
                onClick={() => {
                  ref.current.querySelector("input").value = "";
                  clickEvent(true);
                }}
              >
                <CancelIcon />
              </Box>
            ) : (
              <></>
            )}
            <Button
              variant="contained"
              onClick={() => {
                clickEvent();
              }}
            >
              Search
            </Button>
          </Box>
        </SearchBtn>
      </Grid>
      <Grid
        item
        md={3}
        lg={4}
        sx={{ display: { xs: "none", sm: "none", md: "block" } }}
      >
        {" "}
      </Grid>
    </Grid>
  );
};

export default Search;
