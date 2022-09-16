/* eslint-disable */
import React from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

const SearchCity = ({ setCity, getCurrentLocation, getWeatherForecastByCity }) => {
  const inputRef = useRef('');
  const search = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    setCity(inputRef.current.value);
    // getWeatherForecastByCity();
    // inputRef.current.value = '';
  };

  const currentLocation = (e) => {
    e.preventDefault();
    getCurrentLocation();
  };

  return (
    <Container>
      <form>
        <Input type="text" ref={inputRef} placeholder="City Name" />
        <button type="submit" onClick={(e) => search(e)}>
          Search
        </button>
      </form>
      <button type="submit" onClick={(e) => currentLocation(e)}>
        Current location
      </button>
    </Container>
  );
};

const Container = styled.section`
  /* position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5em; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  margin-right: 5px;
`;

export default SearchCity;
