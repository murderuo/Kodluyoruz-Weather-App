import { useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import LocationContext from "../Context/LocationContext";
import WeatherContext from "../Context/WeatherContext";
import { PortalDiv } from "../pages/Main/StyledComp";

function Portal({ isOpen, setIsOpen, portalCity }) {
  const { location, setLocation, locationValue } = useContext(LocationContext);
  const { daysData } = useContext(WeatherContext);

  useEffect(() => {
    if (
      locationValue.name !== undefined &&
      portalCity !== null &&
      locationValue.name !== portalCity
    ) {
      setLocation(portalCity);
    }
    // eslint-disable-next-line
  }, []);

  if (!isOpen) return null;
  return createPortal(
    <PortalDiv>
        {JSON.stringify(daysData[0])}
      {/* <h2>{portalCity.name}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${daysData[0].weather[0].icon}@2x.png`}
        alt=""
      />
      {/* <label>{convertDate(item.dt)}</label> */}
      <label>Gün içi sıcaklık:</label>
      <label>{daysData[0].temp.day}°C</label>
      <label>Hissedilen sıcaklık:</label>
      <label>{daysData[0].feels_like.day}°C</label>
      <label>hava durumu:</label>
      <label>{daysData[0].weather[0]?.description}</label>
      <button onClick={() => setIsOpen(false)}>Close</button> */}
    </PortalDiv>,
    document.getElementById("portal")
  );
}

export default Portal;
