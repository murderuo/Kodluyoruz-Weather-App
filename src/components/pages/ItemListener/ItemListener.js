import { ListItemCardDiv, ListItemDiv } from '../Main/StyledComp/';

function ItemListener({ item }) {
  const convertDate = stamp => {
    const date = new Date(stamp * 1000);
    const day = date.getDay();
    const days = [
      'Pazar',
      'Pazartesi',
      'Salı',
      'Çarşamba',
      'Perşembe',
      'Cuma',
      'Cumartesi',
    ];
    return days[day];
  };

  return (
    <ListItemCardDiv>
      <img
        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        alt=""
      ></img>
      <div className="date">
        {convertDate(item.dt)}
      </div>
      <div className="temp">Gün içi sıcaklık:{item.temp.day}°C</div>
      <div className="hissedilen">Hissedilen sıcaklık:{item.feels_like.day}°C</div>
      <div className="havaDurumu">
        hava durumu:{item.weather[0].description}
      </div>
    </ListItemCardDiv>
  );
}

export default ItemListener;
