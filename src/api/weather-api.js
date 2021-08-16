const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const fetchWeather = async ({ searchQuery = '' }) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&appid=${API_KEY}`,
    );
    const weather = response.json();
    // console.log(weather);
    return weather;
  } catch (error) {
    throw error;
  }
};

const fetchWeekWeather = async ({ lon = '', lat = '' }) => {
  try {
    const response = await fetch(
      `http:///api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${API_KEY}`,
    );
    const weekWeather = response.json();
    console.log(weekWeather);
    return weekWeather;
  } catch (error) {
    throw error;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchWeather, fetchWeekWeather };
