import React from "react";

export const Selection = ({ handleOnChange }) => {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Select action [ p - park, u - unpark, m - map ]
      </h1>
      <div
        style={{
          display: "flex",
          boxSizing: "border-box",
          flexDirection: "row",
          justifyContent: "space-around",
          alignContent: "center",
          marginHorizontal: "40%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <label>Park</label>
          <input
            type="radio"
            name="option"
            value="park"
            onClick={handleOnChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <label>Unpark</label>
          <input
            type="radio"
            name="option"
            value="unpark"
            onClick={handleOnChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <label>Map</label>
          <input
            type="radio"
            name="option"
            value="map"
            onClick={handleOnChange}
          />
        </div>
      </div>
    </div>
  );
};
