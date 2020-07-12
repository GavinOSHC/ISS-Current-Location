import React, { useEffect, useState } from "react";
import Globe from "./components/Globe";
import axios from "axios";

const App = () => {
  const [iss, setIss] = useState([]);

  useEffect(() => {
    const getIssPosition = async () => await getIss();
    getIssPosition();
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => await getIss(), 5000);
    return () => clearInterval(interval);
  }, []);

  const getIss = async () => {
    const {
      data: { latitude, longitude },
    } = await axios.get("https://api.wheretheiss.at/v1/satellites/25544");

    setIss([latitude, longitude]);
  };

  // console.log(iss);

  return (
    <div>
      <Globe iss={iss} />
    </div>
  );
};

export default App;
