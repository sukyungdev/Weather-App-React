/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */

const WeatherInfo = ({ weather }) => {
  console.log('weather?', weather);

  return (
    <div>
      <p>{weather && weather.name}</p>
      <p>{weather && weather.main.temp}</p>
      <h2>{weather && weather.weather[0].main}</h2>
      <p>{weather && weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherInfo;
