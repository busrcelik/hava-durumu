import React from "react";

function WeatherCard({ weather }) {
  const { name, main, weather: weatherDetails } = weather;
  const { temp, temp_min, temp_max } = main;
  const description = weatherDetails[0].description;
  const icon = weatherDetails[0].icon;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <p className="desc">{description}</p>
      <p>Sıcaklık: {temp.toFixed(1)}°C</p>
      <p>En Yüksek: {temp_max.toFixed(1)}°C</p>
      <p>En Düşük: {temp_min.toFixed(1)}°C</p>
    </div>
  );
}

export default WeatherCard;
