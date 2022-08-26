import React from "react";

export const EntranceInput = ({
  handleOnChange,
  entrance,
  input,
  confirmButton,
  exit,
}) => {
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
          <label>B</label>
          <input
            type="radio"
            name="entryPoint"
            value="b"
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
          <label>C</label>
          <input
            type="radio"
            name="entryPoint"
            value="c"
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
          <label>Exit</label>
          <input onClick={exit} type="radio" id="age1" name="age" value="30" />
        </div>
      </div>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {input.entryPoint != "" && (
          <button
            style={{ height: 50, width: 200, marginTop: 50 }}
            onClick={confirmButton}
          >
            Proceed
          </button>
        )}
      </h1>
    </div>
  );
};
