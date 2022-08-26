import React, { useEffect, useState } from "react";

export const Map = ({ parkSlot }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    parkSlot.map((item) => {
      let length = item.length;
      for (let i = 1; i < length; i++) {
        // console.log("item", item[i]);
      }
    });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Map
    </div>
  );
};
