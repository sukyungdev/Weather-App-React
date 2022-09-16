/* eslint-disable */
import styled from 'styled-components';

const ForecastInfo = ({ forecast }) => {
  const render = () => {
    const result = [];
    for (let i = 2; i < 7; i++) {
      result.push(
        <InfoBox key={i}>
          <Date>{forecast && forecast.list[i].dt_txt.substring(5, 16)}</Date>
          <Info>{forecast && forecast.list[i].weather[0].description}</Info>
        </InfoBox>,
      );
    }
    return result;
  };

  return (
    <Container>
      <Title>ForecastInfo</Title>
      {render()}
    </Container>
  );
};

const Container = styled.section``;
const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 1.2em;
  margin-bottom: 0.5em;
`;

const Date = styled.p`
  /* display: inline-block; */
  font-size: 1.25em;
  margin-bottom: 0.1em;
  font-weight: normal;
`;

const Info = styled.p`
  /* display: inline-block; */
  font-size: 1.25em;
`;

export default ForecastInfo;
