import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Form = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [num, setNum] = useState(0);

  const userAdd = () => {
    // if data exists show alert
    // if data doesnt exist then add
    if (sessionStorage.getItem("name")) {
      alert("Entry already exists");
      this.props.history.push("/", {});
    } else {
      alert("User has been registered");
      sessionStorage.setItem("name", name);
      sessionStorage.setItem("date", date);
      sessionStorage.setItem("number", num);
    }
  };

//   useEffect(() => {
//     
//   }, []);

  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <input type="number" onChange={(e) => setNum(e.target.value)} />
      <Link to="/logout">
      <button onClick={userAdd}>Submit</button>
      </Link>
    </>
  );
};
