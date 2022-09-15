/* eslint-disable */

import styled from 'styled-components';

const WeatherInfo = ({ weather }) => {
  // console.log('weather?', weather);

  return (
    <Container>
      <Title>Current Weather</Title>
      <CityName>{weather && weather.name}</CityName>
      <CurrentWeather>
        {weather && weather.weather[0].main} / {weather && weather.main.temp}
      </CurrentWeather>
      <Desc>{weather && weather.weather[0].description}</Desc>
    </Container>
  );
};

const Container = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  text-align: center;
  padding: 2em;
  margin: 1em;
`;
const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 1em;
`;
const CityName = styled(Title)`
  margin-bottom: 0.2em;
`;
const CurrentWeather = styled.h2`
  font-size: 24px;
  margin-bottom: 0.1em;
  font-weight: normal;
`;
const Desc = styled.p``;

export default WeatherInfo;
