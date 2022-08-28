import React, { useEffect, useState } from "react";
import axios from "axios";
// eslint-disable-next-line no-unused-vars

export const Git = () => {
  const [user, setUser] = useState("");
  const [response, setResponse] = useState({});
  const [filt, setFilt] = useState([]);

  const searchRepos = async () => {
    const result = await axios.get(
      `https://api.github.com/users/${user}/repos`
    );
    // console.log(result);
    setResponse(result.data);
    setFilt(result.data);
  };

  useEffect(() => {
    console.log(response);
  }, [response]);

  return (
    <div>
      <label htmlFor="">Githun Username:</label>
      <input type="text" onChange={(e) => setUser(e.target.value)} />
      <label htmlFor="">Includes forks:</label>
      <input type="checkbox" />
      <button onClick={searchRepos}>Search</button>

      <table>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>DISCRIPTION</th>
          <th>FORK</th>
          <th>SIZE</th>
        </tr>
        {filt.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.fork + ""}</td>
              <td>{item.size}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
