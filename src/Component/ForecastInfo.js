/* eslint-disable */
import styled from 'styled-components';

const ForecastInfo = ({ forecast }) => {
  console.log(forecast ? forecast : '');

  // const render = () => {
  //   const result = [];
  //   for (let i = 2; i < 7; i++) {
  //     result.push(
  //       <div key={i}>
  //         <Date>{forecast && forecast.list[i].dt_txt.substring(5, 16)}</Date>
  //         <Info>{forecast && forecast.list[i].weather[0].description}</Info>
  //       </div>,
  //     );
  //   }
  //   return result;
  // };

  return (
    <Container>
      <Title>ForecastInfo</Title>
      {/* {render()} */}
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

const Date = styled.p`
  font-size: 24px;
  margin-bottom: 0.1em;
  font-weight: normal;
`;

const Info = styled.p``;

export default ForecastInfo;
