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

const Container = styled.section`
  @media screen and (max-width: 768px) {
    /* width: 90%; */
    margin-bottom: 1.5em;
  }
`;
const Title = styled.h1`
  font-size: 1.2em;
  margin-bottom: 0.5em;
`;
const CityName = styled.h1`
  margin-bottom: 0.2em;
`;
const CurrentWeather = styled.h2`
  font-size: 24px;
  margin-bottom: 0.1em;
  font-weight: normal;
`;
const Desc = styled.p``;

export default WeatherInfo;
