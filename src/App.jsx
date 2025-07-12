import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import "./index.css"; 

const API_KEY = "15d7d64beb4207d72e0e5362d746a71e";
function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=tr`
      );

      if (!response.ok) {
        throw new Error("Şehir bulunamadı.");
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="app-container">
      <h1>Hava Durumu Uygulaması</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Şehir adı giriniz..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
        />
        <button onClick={fetchWeather}>Ara</button>
      </div>

      {loading && <p>Yükleniyor...</p>}
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
