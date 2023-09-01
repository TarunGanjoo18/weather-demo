import React, { useState, useEffect } from 'react';
import WeatherCard from './Components/WeatherCard'
import './styles/AppStyles.css'

const API_KEY = 'a3babf236ed70b2478619b0dc8f12b94';
const cities = ['Noida', 'Pune', 'Jammu', 'Vadodara'];

const App = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0])
  const [weather, setWeather] = useState(null);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value)
  };

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(data => {
        setWeather({
          city: data.name,
          temperature: data.main.temp,
          weatherDescription: data.weather[0].description,
        });
      });
  }, [selectedCity]);

  return (
    <div className="app">
      <h1>Weather Station Dashboard</h1>
      <label>Select a City:</label>
      <select value={selectedCity} onChange={handleCityChange}>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      {weather && <WeatherCard {...weather} />}
    </div>
  );
};

export default App;
