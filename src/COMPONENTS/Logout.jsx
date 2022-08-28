import React from "react";
import { Link } from "react-router-dom";

export const Logout = () => {
  return (
    <div>
      <h1> {sessionStorage.getItem("name")}</h1>
      <h1> {sessionStorage.getItem("date")} </h1>
      <h1> {sessionStorage.getItem("number")} </h1>
      <Link to="/">
        {" "}
        <button>LogOut</button>{" "}
      </Link>
    </div>
  );
};
