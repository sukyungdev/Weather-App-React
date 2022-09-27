import './App.css';
import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';
import GlobalStyle from './style/global';

import WeatherInfo from './Component/WeatherInfo';
import ForecastInfo from './Component/ForecastInfo';
import SearchCity from './Component/SearchCity';

// API_KEY
// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = '26838e13d923034d329d7992ddfe3746';

function App() {
  // useState
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(true);

  // function
  const getCurrentLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
      getWeatherForecast(lat, lon);
    });
  }, []);

  const getWeatherByCurrentLocation = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  const getWeatherForecast = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setForecast(data);
    setLoading(false);
  };

  const getCurrentWeatherByCity = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  const getWeatherForecastByCity = async () => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setForecast(data);
    setLoading(false);
  };

  // useEffect
  useEffect(() => {
    if (!city) {
      getCurrentLocation();
    } else {
      getCurrentWeatherByCity();
      getWeatherForecastByCity();
    }
  }, [getCurrentLocation, city]);

  return (
    <MainContainer>
      {loading ? (
        <Container>
          <ClipLoader color="#FFFFFF" loading={loading} size={150} />
        </Container>
      ) : (
        <Container>
          <GlobalStyle />

          <WeatherInfo weather={weather} />
          <ForecastInfo forecast={forecast} />
          <SearchCity
            setCity={setCity}
            getCurrentLocation={getCurrentLocation}
            getWeatherForecastByCity={getWeatherForecastByCity}
          />
        </Container>
      )}
    </MainContainer>
  );
}
const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  background: url('https://images.unsplash.com/photo-1592376830275-74b25b63141a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')
    no-repeat center center;
  background-size: cover;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export default App;
