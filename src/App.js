import "./App.css";
import { useEffect, useCallback } from "react";
import styled from "styled-components";

function App() {
    const getCurrentLocation = useCallback(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            console.log(lat, lon);
        });
    }, []);

    useEffect(() => {
        getCurrentLocation();
    }, [getCurrentLocation]);

    return <Container>aa</Container>;
}
const Container = styled.main`
    width: 100%;
    height: 100vh;
    background-size: cover;
`;

export default App;
