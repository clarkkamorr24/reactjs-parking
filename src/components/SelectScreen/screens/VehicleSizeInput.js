import React from "react";

export const VehicleSizeInput = ({ handleOnChange, input }) => {
  return (
    <>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Vehicle Size [ 0-S, 1-M, 2-L ]:
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
          <label>Small</label>
          <input
            type="radio"
            name="vehicleSize"
            value="0"
            onClick={(event) => handleOnChange(event, 2)}
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
          <label>Medium</label>
          <input
            type="radio"
            name="vehicleSize"
            value="1"
            onClick={(event) => handleOnChange(event, 2)}
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
          <label>Large</label>
          <input
            type="radio"
            name="vehicleSize"
            value="2"
            onClick={(event) => handleOnChange(event, 2)}
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
          <label>Exit</label>
          <input
            onClick={(event) => handleOnChange(event, (input.steps -= 1))}
            type="radio"
            id="age1"
            name="age"
            value="30"
          />
        </div>
      </div>
    </>
  );
};
