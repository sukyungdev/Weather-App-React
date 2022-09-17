/* eslint-disable */
import styled from 'styled-components';

const WeatherInfo = ({ weather }) => {
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
  @media screen and (min-width: 768px) {
    width: 30%;
    padding: 4em 0;
  }
`;
const Title = styled.h1`
  font-size: 1.2em;
  margin-bottom: 0.5em;
  @media screen and (min-width: 768px) {
  }
`;
const CityName = styled.h1`
  margin-bottom: 0.3em;
  @media screen and (min-width: 768px) {
    font-size: 1.7em;
  }
`;
const CurrentWeather = styled.h2`
  font-size: 24px;
  margin-bottom: 0.3em;
  font-weight: normal;
  @media screen and (min-width: 768px) {
    font-size: 1.5em;
  }
`;
const Desc = styled.p`
  @media screen and (min-width: 768px) {
    font-size: 1.2em;
  }
`;

export default WeatherInfo;
