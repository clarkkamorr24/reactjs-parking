import React, { useContext, useEffect } from "react";
import { VerifyContext } from "../VerifyContextProvider";
import {
  EntranceInput,
  Selection,
  VehicleSizeInput,
  Unpark,
  Map,
  ParkScreen,
} from "./screens";

export const SelectScreen = () => {
  const VerifyData = useContext(VerifyContext);
  const {
    input,
    setInput,
    handleOnChange,
    maxColumns,
    message,
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
    // console.log("parkSlot", parkSlot);    // console.log("parkSlot", parkSlot);
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
  const text = () => {
    alert("No Parking slots found!");
    return false;
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
      text();
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

  const remove = (row, col) => {
    let p = parkSlot[row][col];
    let diff = new Date() - p.start;

    let totalPayable = compute(p.psize.value, diff);

    console.log(`Total charges: P ${totalPayable}`);
    // Reset parking slot
    Object.assign(parkSlot[row][col], {
      occupied: false,
      vsize: null,
      start: null,
    });
    alert(`Vehicle Unparked!\nTotal charges: P ${totalPayable}`);
  };

  const confirmButton = async (option) => {
    if (option === "park") {
      park(input.vehicleSize, input.entryPoint);
      setInput({ ...input, steps: 0 });
    } else if (option === "unpark") {
      let strLoc = input?.unpark?.trim().split(" ");
      if (strLoc.length >= 2) {
        let row = strLoc[0];
        let col = strLoc[1];
        await remove(row, col);
        setInput({ ...input, steps: 0 });
        console.log("Vehicle unparked!");
      }
    } else {
    }
  };

  const compute = (size, totalTime) => {
    let remainingTime = totalTime;
    let t24 = 1000 * 60 * 24;
    let t1h = 1000 * 60;
    let charges = 0;

    var hourlyCharge = 0;

    if (size == 0) {
      hourlyCharge = 20;
    } else if (size == 1) {
      hourlyCharge = 60;
    } else if (size == 2) {
      hourlyCharge = 100;
    }

    // For parking that exceeds 24 hours, every full 24 hour chunk is charged 5,000 pesos regardless of parking slot.
    if (remainingTime > t24) {
      let n24 = parseInt(totalTime / t24);
      charges += n24 * 5000;
      remainingTime -= n24 * t24;
    }

    // First 3 hours has a flat rate of 40
    if (remainingTime > t1h * 3) {
      remainingTime -= t1h * 3;
      charges += 40;
    }

    // The exceeding hourly rate beyond the initial three (3) hours will be charged as follows:
    // - 20/hour for vehicles parked in SP;
    // - 60/hour for vehicles parked in MP; and
    // - 100/hour for vehicles parked in LP
    if (remainingTime > 0) {
      let remainingHours = Math.ceil(remainingTime / t1h);
      charges += remainingHours * hourlyCharge;
    }

    // return total charges
    return charges;
  };

  return (
    <div style={{ textAlign: "center" }}>
      {input.steps === 0 ? (
        <Selection
          input={input}
          setInput={setInput}
          handleOnChange={handleOnChange}
        />
      ) : input.steps === 1 ? (
        <VehicleSizeInput input={input} handleOnChange={handleOnChange} />
      ) : input.steps === 2 ? (
        <EntranceInput
          entrance={entrance}
          setInput={setInput}
          input={input}
          handleOnChange={handleOnChange}
          confirmButton={() => park(input.vehicleSize, input.entryPoint)}
        />
      ) : input.steps === 3 ? (
        <ParkScreen confirmButton={confirmButton} input={input} />
      ) : input.steps === 4 ? (
        <Unpark confirmButton={confirmButton} handleOnChange={handleOnChange} />
      ) : input.steps === 5 ? (
        <Map handleOnChange={handleOnChange} parkSlot={parkSlot} />
      ) : (
        <></>
      )}
    </div>
  );
};
