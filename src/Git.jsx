import React, { useEffect, useState } from "react";
import axios from "axios";
// eslint-disable-next-line no-unused-vars

export const Git = () => {
  const [user, setUser] = useState("");
  const [filt, setFilt] = useState([]);
  const [includeFork, setIncludeFork] = useState(false);

  const searchRepos = async () => {
    console.log(includeFork);
    try {
      const result = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );
      // console.log(result);

      const sortedData = result.data.sort((a, b) => {
        console.log(a, b);
        return b.size - a.size;
      });
      setFilt(sortedData);
    } catch (e) {
      console.log(e.message);
      setUser(e.message);
    }
  };

  useEffect(() => {
    console.log(filt);
  }, [filt]);

  const shouldDisplay = (isFork) => {
    if (includeFork) {
      return true;
    } else {
      return !isFork;
    }
  };

  return (
    <div>
      <label htmlFor="">Githun Username:</label>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <label htmlFor="">Includes forks:</label>
      <input
        type="checkbox"
        onChange={(e) => {
          setIncludeFork(e.target.checked);
        }}
      />
      <button onClick={searchRepos} disabled={user.length === 0}>
        Search
      </button>

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
            shouldDisplay(item.fork) && (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.fork + ""}</td>
                <td>{item.size}</td>
              </tr>
            )
          );
        })}
      </table>
    </div>
  );
};
