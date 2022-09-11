import './App.css';
import { useEffect, useCallback } from 'react';
import styled from 'styled-components';

function App() {
  const getCurrentLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  }, []);

  const getWeatherByCurrentLocation = async (lat, lon) => {
    console.log(lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=26838e13d923034d329d7992ddfe3746`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  return <Container />;
}
const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-size: cover;
`;

export default App;
