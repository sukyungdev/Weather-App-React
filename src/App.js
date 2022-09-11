import "./App.css";
import { useEffect, useCallback } from "react";
import styled from "styled-components";

function App() {
    const getCurrentLocation = useCallback(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getWeatherByCurrentLocation(lat, lon);
        });
    }, []);

    const getWeatherByCurrentLocation = async (lat, lon) => {
        console.log(lat, lon);
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=26838e13d923034d329d7992ddfe3746`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    };

    useEffect(() => {
        getCurrentLocation();
    }, [getCurrentLocation]);

    return <Container></Container>;
}
const Container = styled.main`
    width: 100%;
    height: 100vh;
    background-size: cover;
`;

export default App;
