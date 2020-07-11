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
      data: { iss_position },
    } = await axios.get("http://api.open-notify.org/iss-now.json");

    setIss([iss_position.latitude, iss_position.longitude]);
  };

  // console.log(iss);

  return (
    <div>
      <Globe iss={iss} />
    </div>
  );
};

export default App;
