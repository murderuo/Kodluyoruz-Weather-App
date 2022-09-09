import { ListItemCardDiv } from "../Main/StyledComp/";

function ItemListener({ item }) {
  const convertDate = (stamp) => {
    const date = new Date(stamp * 1000);
    const day = date.getDay();
    const days = [
      "Pazar",
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
    ];
    return days[day];
  };

  return (
    <ListItemCardDiv>
      <img
        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        alt=""
      />
      <span>{convertDate(item.dt)}</span>
      <label>Gün içi:</label>
      <span>{item.temp.day}°C</span>
      <label>Hissedilen:</label>
      <span>{item.feels_like.day}°C</span>
      <label>Hava durumu:</label>
      <span>{item.weather[0]?.description.toUpperCase()}</span>
    </ListItemCardDiv>
  );
}

export default ItemListener;
