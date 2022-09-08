import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import withUserContext from '../../hoc/withUserContext/';
import {
  CitysDiv,
  DetailsDiv,
  InputDiv,
  ListItemDiv,
  MainContaierDiv,
  RecentCityItem,
  RecentCityList,
} from './StyledComp';
import { DebounceInput } from 'react-debounce-input';
import WeatherContext from '../../Context/WeatherContext';
import LocationContext from '../../Context/LocationContext';
import ItemListener from '../ItemListener';

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
        'recentCities',
        JSON.stringify(recentCity.slice(0, 5)),
      );
    // eslint-disable-next-line
  }, [locationValue]);

  return (
    <div>
      <MainContaierDiv>
        <CitysDiv>
          <InputDiv>
            <label>Search City:</label>
            <DebounceInput
              debounceTimeout={500}
              onChange={e => setLocation(e.target.value)}
              value={location}
            />
          </InputDiv>
          <InputDiv>
            <h3>Recent Citys</h3>
            <RecentCityList>
              {recentCity.slice(0, 5)?.map((city, index) => (
                <RecentCityItem key={index}>
                  <label>
                    {city.name} <span>sıcaklıkburaya</span>
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
            {daysData.map(item => (
              <ItemListener item={item} key={item.dt} />
            ))}
          </ListItemDiv>
        </DetailsDiv>
      </MainContaierDiv>
    </div>
  );
}

export default withUserContext(Main);
