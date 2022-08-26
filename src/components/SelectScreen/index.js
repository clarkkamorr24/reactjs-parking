import React, { useContext, useEffect } from "react";
import { VerifyContext } from "../VerifyContextProvider";
import {
  EntranceInput,
  Selection,
  VehicleSizeInput,
  Unpark,
  Map,
} from "./screens";

export const SelectScreen = () => {
  const VerifyData = useContext(VerifyContext);
  const {
    input,
    setInput,
    handleOnChange,
    maxColumns,
    setMaxColumns,
    maxRows,
    setMaxRows,
    parkSlot,
    setParkSlot,
    entrance,
    setEntrance,
  } = VerifyData;
  useEffect(() => {
    initSpaces();
    console.log("parkSlot", parkSlot);
  }, [parkSlot]);

  const initSpaces = () => {
    for (let i = 0; i < maxRows; i++) {
      for (let j = 0; j < maxColumns; j++) {
        if (!isGateway(i, j)) {
          parkSlot[i][j] = {
            occupied: false,
            psize: getRandomSize(),
            row: i,
            col: j,
          };
        }
      }
    }
  };

  const getRandomSize = () => {
    // SP = 0, MP = 1, LP = 2
    const max = 2;
    const min = 0;
    const descriptors = ["SP", "MP", "LP"];
    const size = Math.round(Math.random() * (max - min) + min);
    const desc = descriptors[size];
    return {
      value: size,
      desc: desc,
    };
  };

  const getVehicleDesc = (size) => {
    switch (parseInt(size)) {
      case 0:
        return "S";
        break;
      case 1:
        return "M";
        break;
      case 2:
        return "L";
        break;
      default:
        return "";
    }
  };

  const park = (size, ent) => {
    console.log("parkSlot", parkSlot);
    let entry = entrance.find((o) => o.name === ent.toUpperCase());
    let nrow = -1,
      ncol = -1;
    let distance = 9999;

    // Search for the nearest parking space
    for (let i = 0; i < maxRows; i++) {
      for (let j = 0; j < maxColumns; j++) {
        if (!isGateway(i, j)) {
          let p = parkSlot[i][j];
          if (size <= p.psize.value) {
            // Check if vehicle fits in parking slot
            let computedDistance =
              Math.abs(entry.row - p.row) + Math.abs(entry.col - p.col);
            if (distance > computedDistance && !p.occupied) {
              distance = computedDistance;
              nrow = i;
              ncol = j;
            }
          }
        }
      }
    }

    if (nrow == -1) {
      // No parking slot found
      alert("No parking slot found");
      return false;
    } else {
      Object.assign(parkSlot[nrow][ncol], {
        occupied: true,
        vsize: {
          value: parseInt(size),
          desc: getVehicleDesc(size),
        },
        row: nrow,
        col: ncol,
        start: new Date(),
      });
      alert("Successfully Park!");
      setInput({ option: "", vehicleSize: "", entryPoint: "" });
      return parkSlot[nrow][ncol];
    }
  };

  const isGateway = (row, col) => {
    if (col == 0 || row == 0 || row == maxRows - 1 || col == maxColumns - 1) {
      return true;
    } else {
      return false;
    }
  };

  const exit = () => {
    alert("Have a nice day!");
    setInput({ option: "", vehicleSize: "", entryPoint: "" });
  };

  return (
    <div>
      {input.option === "" ? (
        <Selection
          input={input}
          setInput={setInput}
          handleOnChange={handleOnChange}
        />
      ) : input.option === "park" && !input.vehicleSize ? (
        <VehicleSizeInput exit={exit} handleOnChange={handleOnChange} />
      ) : input.vehicleSize ? (
        <EntranceInput
          exit={exit}
          entrance={entrance}
          input={input}
          handleOnChange={handleOnChange}
          confirmButton={() => park(input.vehicleSize, input.entryPoint)}
        />
      ) : input.option === "unpark" ? (
        <Unpark handleOnChange={handleOnChange} />
      ) : input.option === "map" ? (
        <Map handleOnChange={handleOnChange} parkSlot={parkSlot} />
      ) : (
        <></>
      )}
      {/* <button onClick={confirmButton}>Enter</button> */}
      {/* <input onChange={handleOnChange}></input>
      
      <p>{input}</p> */}
    </div>
  );
};
