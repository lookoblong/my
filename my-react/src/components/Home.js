import React from "react";
import { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/board")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return <div>{data}</div>;
}

export default Home;
