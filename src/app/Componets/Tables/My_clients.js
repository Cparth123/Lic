"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Panding from "../../api/Table/Panding.json";
const thad = [
  "name",
  "policy No",
  "number",
  "stutas",
  "email",
  "address",
  "policy Type",
  "Last insue",
];
export default function My_clients() {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        sx={{
          width: "100%",
          backgroundColor: "#80808064",
          boxShadow: "0px 0px 5px -2px black",
        }}
      >
        <TableContainer sx={{ height: "250px" }}>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <TableHead
              sx={{
                position: "sticky",
                top: 0,
                left: 0,
                zIndex: 2,
                backgroundColor: "skyblue",
              }}
            >
              <TableRow>
                {thad.map((item) => {
                  return (
                    <TableCell
                      align="right"
                      sx={{ fontWeight: "bold", textTransform: "capitalize" }}
                    >
                      {item}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>

            <TableBody>
              {Panding.map((item) => {
                return (
                  <TableRow hover sx={{ cursor: "pointer" }}>
                    <TableCell align="right">{item.name}</TableCell>
                    <TableCell align="right">{item.policy_no}</TableCell>
                    <TableCell align="right">{item.number}</TableCell>
                    <TableCell align="right">{item.stutas}</TableCell>
                    <TableCell align="right">{item.email}</TableCell>
                    <TableCell align="right">{item.address}</TableCell>
                    <TableCell align="right">{item.policy_type}</TableCell>
                    <TableCell align="right">{item.Last_issue}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
