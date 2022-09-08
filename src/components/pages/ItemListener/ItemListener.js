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
      <label>{convertDate(item.dt)}</label>
      <label>Gün içi sıcaklık:</label>
      <label>{item.temp.day}°C</label>
      <label>Hissedilen sıcaklık:</label>
      <label>{item.feels_like.day}°C</label>
      <label>hava durumu:</label>
      <label>{item.weather[0]?.description}</label>
    </ListItemCardDiv>
  );
}

export default ItemListener;
