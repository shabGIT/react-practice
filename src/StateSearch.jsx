import React, { useEffect, useState } from "react";
import axios from "axios";

export const StateSearch = () => {
  const [data, setData] = useState([]);
  const [txt, setTxt] = useState("");
  const [datacopy, setDatacopy] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await axios.get("http://localhost:3030/state");
    console.log(result);
    setData(result.data);
    setDatacopy(result.data);
  };

  useEffect(() => {
    const filtered = datacopy.filter((item) =>
      item.stateName.toUpperCase().includes(txt.toUpperCase())
    );
    setData(filtered);
  }, [txt]);

  const handleSelect = (state) => {
    setTxt(state);
  };

  return (
    <div>
      <input type="text" value={txt} onChange={(e) => setTxt(e.target.value)} />
      {data &&
        data.length > 1 &&
        txt &&
        data.map((item) => {
          return (
            <div>
              <h4 onClick={() => handleSelect(item.stateName)}>
                {item.stateName}
              </h4>
            </div>
          );
        })}
    </div>
  );
};
