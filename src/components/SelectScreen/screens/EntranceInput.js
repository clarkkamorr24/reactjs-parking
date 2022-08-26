import React from "react";

export const EntranceInput = ({ handleOnChange, entrance, input }) => {
  let strEntrance = entrance.map((e) => e.name).join(",");
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        "Entry Points [{strEntrance}]"
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
          <label>A</label>
          <input
            type="radio"
            name="entryPoint"
            value="a"
            onClick={(event) => handleOnChange(event, 3)}
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
          <label>B</label>
          <input
            type="radio"
            name="entryPoint"
            value="b"
            onClick={(event) => handleOnChange(event, 3)}
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
          <label>C</label>
          <input
            type="radio"
            name="entryPoint"
            value="c"
            onClick={(event) => handleOnChange(event, 3)}
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
    </div>
  );
};
