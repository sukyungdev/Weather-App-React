import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}

body {
    box-sizing: border-box;
}

section,
button {
  background: rgba(255, 255, 255, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  text-align: center;
}

button,
input {
  border: none;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.35) 1px 3px 8px;
}

button{
  cursor: pointer;
  transition: background 500ms ease-in;
}

button:hover{
  background: rgba( 0, 173, 255, 0.8 );
}

section {
  padding: 1.2em 1em;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
}
`;

export default GlobalStyle;
