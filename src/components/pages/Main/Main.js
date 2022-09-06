import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import withUserContext from "../../hoc/withUserContext/";
import { MainContaierDiv } from "./StyledComp";
import style from "./Main.module.css";
import withLocationContext from "../../hoc/withLocationContext/";
import { DebounceInput } from "react-debounce-input";
import WeatherContext from "../../Context/WeatherContext";

function Main({ setIsAuth, location, setLocation, locationValue }) {
  let navigate = useNavigate();
  const { daysData } = useContext(WeatherContext);
  const [recentCity, setRecentCity] = useState([]);
  let recentCityList = [];

  
  useEffect(() => {
    const LoggedUser = JSON.parse(localStorage.getItem("user"));
    LoggedUser?.isAuth ? setIsAuth(true) : setIsAuth(false);
    LoggedUser?.isAuth ? navigate("/") : navigate("/login");
    // eslint-disable-next-line
  }, []);
  
  useEffect(() => {
    recentCityList = JSON.parse(localStorage.getItem("recentCities"));
    if (recentCityList !== null) {
      setRecentCity(recentCityList);
    }
    console.log("initilaze city list", recentCityList);
    console.log("city list from state", recentCity);
  }, []);

  useEffect(() => {
    if (!recentCity.includes(locationValue)) {
      setRecentCity([locationValue, ...recentCity]);
    }
    recentCity.length === 5 &&
      localStorage.setItem(
        "recentCities",
        JSON.stringify(recentCity.slice(0, 5))
      );
    // eslint-disable-next-line
  }, [locationValue]);

  return (
    <div>
      <MainContaierDiv>
        <div className={style.citys}>
          <div className={style.input}>
            <label>Search City:</label>
            <DebounceInput
              debounceTimeout={500}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className={style.recentCity}>
            <h3>Recent City</h3>
            <div className="">
              {recentCity.slice(0, 5)?.map((city, index) => (
                <div key={index} className={style.recentCityItem}>
                  <label>
                    {city.name} <span>City Temp</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={style.details}>
          details:{locationValue.name} <hr />
          {daysData.map((item) => (
            <div key={item.dt}>{item.humidity}</div>
          ))}
        </div>
      </MainContaierDiv>
    </div>
  );
}

export default withLocationContext(withUserContext(Main));
