import React, { useContext } from "react";
import { VerifyContextProvider, SelectScreen } from "./components";

export const InitialScreen = () => {
  return (
    <VerifyContextProvider>
      <SelectScreen />
    </VerifyContextProvider>
  );
};

export default InitialScreen;
