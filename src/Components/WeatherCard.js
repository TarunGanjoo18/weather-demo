import React from 'react';
import '../styles/WeatherStyles.css'

const WeatherCard = ({ city, temperature, weatherDescription }) => {
    return (
        <div className="weather-card">
            <h2>{city}</h2>
            <p>Temperature: {temperature}°C</p>
            <p>Weather: {weatherDescription}</p>
        </div>
    );
};

export default WeatherCard;
