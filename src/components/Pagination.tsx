import * as React from "react";
import Paging from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { AppDispatch, RootState } from "@store";
import { useDispatch, useSelector } from "react-redux";
import { fetch_data } from "@actions";

const Pagination = () => {
  const dispatch: AppDispatch = useDispatch();
  const page = useSelector((state: RootState) => state.page);
  const info = useSelector((state: RootState) => state.info);
  const [goto, setGoto] = React.useState<number>(1);
  React.useEffect(() => {
    dispatch(fetch_data(goto));
  }, [goto]);
  return (
    <Stack spacing={2}>
      <Paging
        sx={{ m: "auto" }}
        count={info.pages}
        variant="outlined"
        onChange={(ev, currentPage: number) => {
          setGoto(currentPage);
        }}
      />
    </Stack>
  );
};

export default Pagination;
