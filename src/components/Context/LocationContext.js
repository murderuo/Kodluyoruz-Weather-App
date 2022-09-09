import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const LocationContext = createContext();

const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState('istanbul');
  const [locationValue, setLocationValue] = useState({});

  const getLocation = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=ec7d1c0e712571e97e77329fca7e15f3`,
    );
    // console.log(response.data);
    const data = await response.data[0];
    // data.name.toLowerCase() === location.toLowerCase() &&
    //   setLocationValue({
    //     name: data.name,
    //     lat: data.lat,
    //     lon: data.lon,
    //     country: data.country,
    //   });
    if (data.name.toLowerCase() === location.toLowerCase()) {
      setLocationValue({
        name: data.name,
        lat: data.lat,
        lon: data.lon,
        country: data.country,
      });
      // console.log(data);
      setLocation('')
    }
  };

  useEffect(() => {
    location !== '' && getLocation();
    // getLocation();
    // eslint-disable-next-line
  }, [location]);

  const value = { location, setLocation, locationValue, setLocationValue };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

export { LocationContextProvider };
export default LocationContext;
