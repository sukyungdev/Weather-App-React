/* eslint-disable */
import styled from 'styled-components';

const ForecastInfo = ({ forecast }) => {
  if (forecast) {
    // console.log(forecast);
    //object로 데이터 정리해서 보내면 좋을듯 하다.
    console.log(forecast.list[0].weather[0].main);
  }

  const render = () => {
    const result = [];
    for (let i = 2; i < 7; i++) {
      result.push(
        <div key={i}>
          <Date>{forecast && forecast.list[i].dt_txt}</Date>
          <Info>{forecast && forecast.list[i].weather[0].main}</Info>
        </div>,
      );
    }
    return result;
  };

  for (let i = 0; i < 5; i++) {}
  return (
    <div>
      <Title>ForecastInfo</Title>
      <p>{forecast && forecast.cod}</p>
      {render()}
    </div>
  );
};

const Title = styled.h1`
  color: aqua;
`;

const Date = styled.p`
  color: blue;
`;

const Info = styled.p`
  color: skyblue;
`;

export default ForecastInfo;
