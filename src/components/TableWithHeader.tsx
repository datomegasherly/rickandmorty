import * as React from "react";
import {
  TableRow,
  TableCell,
  TableContainer as Container,
  TableHead,
  Table,
  TableBody,
} from "@mui/material";

const TableWithHeader = (props: {
  component?: Function;
  data: any[];
  rows: string[];
}) => {
  return (
    <Container {...(props.component ? { component: props.component } : {})}>
      <Table>
        <TableHead>
          <TableRow>
            {props.rows.map((row: string) => {
              return (
                <TableCell>{row.toUpperCase().replace(/_/g, " ")}</TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((dt: any) => {
            return (
              <TableRow
                key={dt.id}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                {props.rows.map((row: string) => {
                  return (
                    <TableCell sx={{ fontWeight: "bold" }}>{dt[row]}</TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Container>
  );
};

export default TableWithHeader;
