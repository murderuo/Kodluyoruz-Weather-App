import axios from "axios";
import React, { createContext, useState, useEffect, useContext } from "react";
import LocationContext from "./LocationContext";

const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
  const part = "current,minutely,hourly,alerts";
  const [daysData, setDaysData] = useState([]);
  const { locationValue } = useContext(LocationContext);

  const getData = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${locationValue.lat}&lon=${locationValue.lon}&exclude=${part}&appid=ec7d1c0e712571e97e77329fca7e15f3&units=metric&lang=tr`
    );
    const data = await response.data.daily;
    setDaysData(data);
  };

  useEffect(() => {
    locationValue.lon !== undefined && getData();
    // eslint-disable-next-line
  }, [locationValue]);

  const value = { daysData, setDaysData };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export { WeatherContextProvider };
export default WeatherContext;
