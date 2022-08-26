import React from "react";

export const Unpark = ({ confirmButton, handleOnChange }) => {
  return (
    <>
      <h1>Unpark</h1>
      <label>
        Location of vehicle to unpark. Seperate by a space [row column]:{" "}
      </label>
      <input
        name="unpark"
        onChange={(event) => handleOnChange(event, 4)}
        style={{ marginRight: 20 }}
      />
      <button onClick={() => confirmButton("unpark")}>Enter</button>
    </>
  );
};
