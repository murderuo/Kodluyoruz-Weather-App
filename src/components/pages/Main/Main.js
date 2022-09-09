import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import withUserContext from "../../hoc/withUserContext/";
import {
  CitysDiv,
  DetailsDiv,
  InputDiv,
  ListItemDiv,
  MainContaierDiv,
  PortalDiv,
  RecentCityItem,
  RecentCityList,
} from "./StyledComp";
import { DebounceInput } from "react-debounce-input";
import WeatherContext from "../../Context/WeatherContext";
import LocationContext from "../../Context/LocationContext";
import ItemListener from "../ItemListener";
import { ErrorBoundary } from "react-error-boundary";
import Portal from "../../Portal";

function Main({ setIsAuth }) {
  let navigate = useNavigate();
  const { location, setLocation, locationValue } = useContext(LocationContext);
  const { daysData } = useContext(WeatherContext);
  const [recentCity, setRecentCity] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [portalCity, setPortalCity] = useState(null);
  let recentCityList = [];

  useEffect(() => {
    const LoggedUser = JSON.parse(localStorage.getItem("user"));
    LoggedUser?.isAuth ? setIsAuth(true) : setIsAuth(false);
    LoggedUser?.isAuth ? navigate("/") : navigate("/login");
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    //eslint-disable-next-line
    recentCityList = JSON.parse(localStorage.getItem("recentCities"));
    if (recentCityList !== null && recentCityList.length > 0) {
      setRecentCity(recentCityList);
    }
    if (
      !recentCity.includes(locationValue) &&
      locationValue.name !== undefined
    ) {
      setRecentCity([locationValue, ...recentCity]);
    }

    recentCity.length >= 5 &&
      localStorage.setItem(
        "recentCities",
        JSON.stringify(recentCity.slice(0, 5))
      );
    // eslint-disable-next-line
  }, [locationValue]);

  const handleOpenPortal = (item) => {
    setIsOpen(!isOpen);
    setPortalCity(item);
  };

  return (
    <div>
      <MainContaierDiv>
        <CitysDiv>
          <InputDiv>
            <label>Search City:</label>
            <DebounceInput
              debounceTimeout={500}
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
          </InputDiv>
          <InputDiv>
            <h3>Recent Citys</h3>
            <RecentCityList>
              {recentCity.slice(0, 5)?.map((city, index) => (
                <RecentCityItem key={index}>
                  <label 
                  // onClick={() => handleOpenPortal(city.name)}
                   onClick={() => handleOpenPortal(city.name)}
                  //  onMouseLeave={() => handleOpenPortal(city.name)}
                  >
                    {city.name} <span>{daysData[index]?.temp?.day}</span>
                  </label>
                </RecentCityItem>
              ))}
            </RecentCityList>
          </InputDiv>
        </CitysDiv>
        {/* {console.log(daysData)} */}
        <DetailsDiv>
          <label>{locationValue.name}</label>
          <ListItemDiv>
            <ErrorBoundary
              fallback={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                    width: "100%",
                    fontSize: "20px",
                    // textAlign: "center",
                  }}
                >
                  There is something wrong ! in
                  <br />
                  ItemListener component..
                </div>
              }
            >
              {daysData.map((item) => (
                <ItemListener item={item} key={item.dt} />
              ))}
            </ErrorBoundary>
          </ListItemDiv>
        </DetailsDiv>
        <div id="portal" />
        <Portal isOpen={isOpen} setIsOpen={setIsOpen} portalCity={portalCity} />
      </MainContaierDiv>
    </div>
  );
}

export default withUserContext(Main);
