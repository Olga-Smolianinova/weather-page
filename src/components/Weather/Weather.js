import React from 'react';

import './Weather.css';

export default function Weather({ weather }) {
  return (
    <>
      <div className="current-weather-wrap">
        <ul className="weather-list">
          {weather.map(({ dt, name, main, weather, wind, clouds }) => (
            <li key={name}>
              <h2>Current weather</h2>
              <p>{new Date(dt * 1000).toDateString()}</p>
              <p>location: {name}</p>
              <p>
                {Math.round(main.temp)}°C / feels like{' '}
                {Math.round(main.feels_like)}°C
              </p>

              {weather.map(({ id, icon, description }) => (
                <div key={id}>
                  <img
                    src={`https://openweathermap.org/img/wn/${icon}.png`}
                    alt="icon"
                  />
                  <p>{description}</p>
                </div>
              ))}

              <p>cloudiness: {clouds.all}%</p>
              <p>humidity: {main.humidity}%</p>
              <p>wind speed: {wind.speed}m/s</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
