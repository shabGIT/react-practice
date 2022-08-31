import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
var data = require("./MOCK.json");
export const StateDrop = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [filt, setFilt] = useState([]);
  //   console.log(data);

  useEffect(() => {
    let result = data.filter((item) => {
      return item.state.toUpperCase().includes(searchTerm?.toUpperCase());
    });
    setFilt(result);
    // console.log(result);
  }, [searchTerm]);

  return (
    <>
      <TextField
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
      />

      {searchTerm &&
        filt.length > 1 &&
        filt.map((item, index) => {
          return (
            <h3
              key={index}
              onClick={(e) => {
                // console.log(e.target.value);
                setsearchTerm(item.state);
              }}
            >
              {item.state}
            </h3>
          );
        })}
    </>
  );
};
