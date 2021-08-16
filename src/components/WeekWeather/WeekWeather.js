import React from 'react';

import './WeekWeather.css';

export default function WeekWeather({ weekWeather }) {
  return (
    <>
      {weekWeather.map(({ lat, lon, daily }) => (
        <div key={lat} className>
          <h2 className="week-weather-title">Week Weather</h2>
          <p>
            lat: {lat} / lon: {lon}
          </p>

          <ul className="week-weather-gallery">
            {daily.map(
              ({ dt, temp, feels_like, clouds, humidity, wind_speed }) => (
                <li key={dt} className="week-weather-item">
                  <p>{new Date(dt * 1000).toDateString()}</p>
                  <p>
                    Morning {Math.round(temp.morn)}°C / Feels like{' '}
                    {Math.round(feels_like.morn)}°C
                  </p>

                  <p>
                    Day {Math.round(temp.day)}°C / Feels like{' '}
                    {Math.round(feels_like.day)}°C
                  </p>

                  <p>
                    Evening {Math.round(temp.eve)}°C / Feels like{' '}
                    {Math.round(feels_like.eve)}°C
                  </p>

                  <p>
                    Night {Math.round(temp.night)}°C / Feels like{' '}
                    {Math.round(feels_like.night)}°C
                  </p>

                  <p>Cloudiness: {clouds}%</p>
                  <p>Humidity: {humidity}%</p>
                  <p>Wind speed: {wind_speed}m/s</p>
                </li>
              ),
            )}
          </ul>
        </div>
      ))}
    </>
  );
}
