import React from "react";
import { Card, CardContent, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
export const UserRegistration = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Link to="/form">
                <Button variant="contained" color="secondary">
                  Proceed
                </Button>
              </Link>
              <Button variant="contained" color="secondary">
                Cancel
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </>
  );
};
