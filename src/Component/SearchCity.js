/* eslint-disable */
import React from 'react';
import { useRef } from 'react';

const SearchCity = ({ setCity, getCurrentLocation }) => {
  const inputRef = useRef('');
  const search = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    setCity(inputRef.current.value);
    // inputRef.current.focus();
    inputRef.current.value = '';
  };

  const currentLocation = () => {
    e.preventDefault();
    getCurrentLocation();
  };

  return (
    <div>
      <form>
        <input type="text" ref={inputRef} />
        <button type="submit" onClick={(e) => search(e)}>
          ?
        </button>
        <button type="submit" onClick={(e) => currentLocation(e)}>
          current location
        </button>
      </form>
    </div>
  );
};

export default SearchCity;
