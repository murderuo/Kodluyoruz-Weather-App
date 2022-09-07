import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import withUserContext from '../../hoc/withUserContext/';
import { MainContaierDiv } from './StyledComp';
import style from './Main.module.css';
import { DebounceInput } from 'react-debounce-input';
import WeatherContext from '../../Context/WeatherContext';
import LocationContext from '../../Context/LocationContext';

function Main({ setIsAuth }) {
  let navigate = useNavigate();
  const { location, setLocation, locationValue } = useContext(LocationContext);
  const { daysData } = useContext(WeatherContext);
  const [recentCity, setRecentCity] = useState([]);
  let recentCityList = [];

  useEffect(() => {
    const LoggedUser = JSON.parse(localStorage.getItem('user'));
    LoggedUser?.isAuth ? setIsAuth(true) : setIsAuth(false);
    LoggedUser?.isAuth ? navigate('/') : navigate('/login');
    // eslint-disable-next-line
  }, []);


  useEffect(() => {
    recentCityList = JSON.parse(localStorage.getItem('recentCities'));
    if (recentCityList !== null && recentCityList.length >0) {
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
        'recentCities',
        JSON.stringify(recentCity.slice(0, 5)),
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
              onChange={e => setLocation(e.target.value)}
              value={location}
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
          {daysData.map(item => (
            <div key={item.dt}>{item.humidity}</div>
          ))}
        </div>
      </MainContaierDiv>
    </div>
  );
}

export default withUserContext(Main);
