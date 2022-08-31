import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import axios from "axios";

export const State = () => {
  const [cat, setcat] = useState("");
  const [data, setData] = useState([]);

  const stateAdd = () => {
    const res = axios.post("http://localhost:3030/addstate", {
      stateName: cat,
    });
    setcat("");
    console.log(res);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          <TextField
            variant="outlined"
            label="Enter Here"
            fullWidth
            onChange={(e) => setcat(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" fullWidth onClick={stateAdd}>
            ADD{" "}
          </Button>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>

      {data.map((item) => {
        return <div>{item.stateName}</div>;
      })}
    </>
  );
};
