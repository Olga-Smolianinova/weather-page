import React, { useState, useEffect } from 'react';

// Components
import Searchbar from './components/Searchbar';
import Weather from './components/Weather';
import WeekWeather from './components/WeekWeather';
import Loader from './components/Loader';

// API
import weatherApi from './api/weather-api';

export default function App() {
  const [weather, setWeather] = useState([]);
  const [weekWeather, setWeekWeather] = useState([]);
  const [searchQuery, setSearchQuery] = useState('lviv');
  const [lat, setLat] = useState('49.8383');
  const [lon, setLon] = useState('24.0232');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather();
    fetchWeekWeather();
    return () => setWeather([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, lat, lon]);

  // Function
  const fetchWeather = async () => {
    try {
      //   выводим в отдельную переменную  searchQuery для того, чтобы передать options в props в weather-api.js;
      const options = { searchQuery, error };

      //   сотояние загрузки, меняем значение
      setIsLoading(true);

      //проверка на то, если пользователь ничего не ввел в input, не отправлять http-запрос
      if (!searchQuery) {
        return;
      }

      // вызов функции из файла который прописывает логику настроек Api (weather-api.js)
      const response = await weatherApi.fetchWeather(options);
      const { coord } = response;

      setWeather([...weather, response]);
      // console.log(response);

      setLat(coord.lat);
      setLon(coord.lon);
      // console.log(coord.lat);
      // console.log(coord.lon);

      if (!response) {
        throw new Error('Something get wrong! Try again!');
      }
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  const fetchWeekWeather = async () => {
    try {
      //   выводим в отдельную переменную  координаты, чтобы передать options в props в weather-api.js;
      const options = { lat, lon };

      //   сотояние загрузки, меняем значение
      setIsLoading(true);

      //проверка на то, если нет координат, не отправлять http-запрос
      if (!lat || !lon) {
        return;
      }

      // вызов функции из файла который прописывает логику настроек Api (weather-api.js)
      const data = await weatherApi.fetchWeekWeather(options);

      setWeekWeather([...weekWeather, data]);
      // console.log(data);

      if (!data) {
        throw new Error('Something get wrong! Try again!');
      }
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  // метод, который будет отрабатываться при submit формы, когда будет изменяться query
  const changeQuery = query => {
    setSearchQuery(query);
    setLon('');
    setLat('');
    setWeather([]);
    setWeekWeather([]);
    setError(null);
  };

  return (
    <>
      {/* Searchbar. В props передаем метод, который будет отрабатываться при submit формы */}
      <Searchbar onSubmit={changeQuery} />

      <div className="App">
        {/* Loader {/* появление спиннера, рендерим по условию  */}
        {isLoading && <Loader />}

        <Weather weather={weather} />

        <WeekWeather weekWeather={weekWeather} />

        {/* для обработки ошибок (error) */}
        {error && <h2 className="ErrorMessage">{error.message}</h2>}
      </div>
    </>
  );
}
