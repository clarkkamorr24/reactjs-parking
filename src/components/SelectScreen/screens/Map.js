import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const Map = ({ parkSlot, handleOnChange }) => {
  const [small, setSmall] = useState([]);
  const [medium, setMedium] = useState([]);
  const [large, setLarge] = useState([]);

  const getData = () => {
    let sp = [];
    let mp = [];
    let lp = [];
    parkSlot.map((item) => {
      var filtered = item.filter((res) => {
        return res != null && res.psize.desc == "SP";
      });
      filtered.map((res) => {
        sp.push(res);
      });
    });
    parkSlot.map((item) => {
      var filtered = item.filter((res) => {
        return res != null && res.psize.desc == "MP";
      });
      filtered.map((res) => {
        mp.push(res);
      });
    });
    parkSlot.map((item) => {
      var filtered = item.filter((res) => {
        return res != null && res.psize.desc == "LP";
      });
      filtered.map((res) => {
        lp.push(res);
      });
    });
    setSmall(sp);
    setMedium(mp);
    setLarge(lp);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ marginRight: 300 }}>MAP</h1>
        <Button
          variant="contained"
          onClick={(event) => handleOnChange(event, 0)}
        >
          EXIT
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div style={{ marginRight: 40 }}>
          <h1>Small Area</h1>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">Column</TableCell>
                  <TableCell align="center">Row</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {small.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">
                      {row.occupied ? (
                        <label style={{ color: "red" }}>occupied</label>
                      ) : (
                        <label style={{ color: "#087300" }}>available</label>
                      )}
                    </TableCell>
                    <TableCell align="center">{row.col}</TableCell>
                    <TableCell align="center">{row.row}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div style={{ marginRight: 40 }}>
          <h1>Medium Area</h1>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">Column</TableCell>
                  <TableCell align="center">Row</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {medium.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">
                      {row.occupied ? (
                        <label style={{ color: "red" }}>occupied</label>
                      ) : (
                        <label style={{ color: "#087300" }}>available</label>
                      )}
                    </TableCell>
                    <TableCell align="center">{row.col}</TableCell>
                    <TableCell align="center">{row.row}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div>
          <h1>Large Area</h1>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">Column</TableCell>
                  <TableCell align="center">Row</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {large.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">
                      {row.occupied ? (
                        <label style={{ color: "red" }}>occupied</label>
                      ) : (
                        <label style={{ color: "#087300" }}>available</label>
                      )}
                    </TableCell>
                    <TableCell align="center">{row.col}</TableCell>
                    <TableCell align="center">{row.row}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      {/* <button onClick={(event) => handleOnChange(event, 0)}>exit</button> */}
    </div>
  );
};
