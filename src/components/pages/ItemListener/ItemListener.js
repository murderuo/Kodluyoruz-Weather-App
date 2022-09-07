import './itemlist.css';

function ItemListener({ item }) {
  const convertDate = stamp => {
    const date = new Date(stamp * 1000);
    const day = date.getDay();
    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    return days[day];
  };

  return (
    <div className="list-item">
      <div className="date">
        Tarih:
        {convertDate(item.dt)}
      </div>
      <div className="temp">Gün içi sıcaklık:{item.temp.day}</div>
      <div className="hissedilen">hissedilen:{item.feels_like.day}</div>
      <div className="havaDurumu">
        hava durumu:{item.weather[0].description}
      </div>
    </div>
  );
}

export default ItemListener;
