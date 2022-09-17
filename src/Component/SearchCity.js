/* eslint-disable */
import React from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { FcSearch } from 'react-icons/fc';

const SearchCity = ({ setCity, getCurrentLocation, getWeatherForecastByCity }) => {
  const inputRef = useRef('');
  const search = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    setCity(inputRef.current.value);
    inputRef.current.value = '';
  };

  const currentLocation = (e) => {
    e.preventDefault();
    getCurrentLocation();
  };

  return (
    <Container>
      <Form>
        <Input type="text" ref={inputRef} placeholder="City Name" />
        <SearchBtn type="submit" onClick={(e) => search(e)}>
          <FcSearch size={20} />
        </SearchBtn>
      </Form>
      <CurrentBtn type="submit" onClick={(e) => currentLocation(e)}>
        Current location
      </CurrentBtn>
    </Container>
  );
};

const Container = styled.section`
  @media screen and (max-width: 768px) {
    width: 80%;
    position: relative;
    top: 0;
    left: 0;
    transform: translateX(0);
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  max-width: 540px;
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  margin-right: 5px;
  padding: 8px 10px;
`;

const SearchBtn = styled.button`
  padding: 4px 5px;
`;

const CurrentBtn = styled.button`
  padding: 7px 5px;
  font-size: 1em;
`;

export default SearchCity;
