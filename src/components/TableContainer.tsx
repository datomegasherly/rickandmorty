import * as React from "react";
import {
  TableRow,
  TableCell,
  TableContainer as Container,
  Table,
  TableBody,
} from "@mui/material";

const TableContainer = (props: {
  component?: Function;
  data: any;
  keys: string[];
  filter: string[];
}) => {
  return (
    <Container {...(props.component ? { component: props.component } : {})}>
      <Table>
        <TableBody>
          {props.keys.map((row: string) => {
            if (props.filter.indexOf(row) >= 0) return;
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
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  {props.data[row]}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Container>
  );
};

export default TableContainer;
