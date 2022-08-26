import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

export const ParkScreen = ({ confirmButton, input }) => {
  return (
    <>
      <h1 style={{ fontSize: 50 }}>Back to Selection</h1>
      <Button variant="contained" onClick={() => confirmButton("park")}>
        ok
      </Button>
    </>
  );
};
