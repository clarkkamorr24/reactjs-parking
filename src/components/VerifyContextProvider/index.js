import React, { createContext, useState, useEffect } from "react";

export const VerifyContext = createContext();
const { Provider } = VerifyContext;

const initialState = {
  option: "",
  vehicleSize: "",
  entryPoint: "",
};

export const VerifyContextProvider = ({ children }) => {
  const [input, setInput] = useState(initialState);
  const [maxColumns, setMaxColumns] = useState(8);
  const [maxRows, setMaxRows] = useState(5);

  const [parkSlot, setParkSlot] = useState(
    new Array(maxRows).fill(null).map(() => new Array(maxColumns).fill(null))
  );

  const [entrance, setEntrance] = useState([
    { name: "A", row: 0, col: 2 },
    { name: "B", row: 0, col: 6 },
    { name: "C", row: maxRows, col: 3 },
  ]);

  const handleOnChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <Provider
      value={{
        input,
        setInput,
        maxColumns,
        setMaxColumns,
        maxRows,
        setMaxRows,
        parkSlot,
        setParkSlot,
        entrance,
        setEntrance,
        handleOnChange,
      }}
    >
      {children}
    </Provider>
  );
};
