import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  :root {
    --black: #111;
    --gray: #666;
    --gray-session: #eee;
    --green: #0A6;
    --red:#e22;
    --pink: #E24;
    --yellow: #EE2;
    --white: #FFF;
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
  }

  ul {
    margin: 0;
    padding-left: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    transition: .3s;
    width: fit-content;
  }

  button {
    cursor: pointer;
  }

  h1,h2,h3,h4,h5, p {
    margin: 0;
    padding: 0;
  }
`;
