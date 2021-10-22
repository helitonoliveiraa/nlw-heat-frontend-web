import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FFFFFF;

    --gray-100:  #E1E1E6;
    --gray-150: #C4C4CC;
    --gray-400: #8D8D99;
    --gray-900: #29292E;

    --blak-700: #202024;
    --blak-800: #121214;
    --blak-900: #09090A;

    --yellow-400: #FFCD1E;
    --orange-500: #FF7A29;
    --pink-500: #FF008E;
    --green-500: #1B873F;
  }

  html {
    font-size: 62.5%; /* 1rem to equal 10px */

    @media (max-width: 1080px) {
      & {
        font-size: 56.25%; /* 0.9rem to equal 9px */
      }
    }

    @media (max-width: 720px) {
      & {
        font-size: 50%; /* 0.8rem to equal 8px */
      }
    }
  }

  body {
    background: var(--blak-800);
    color: var(--gray-100);
  }

  body, input, textarea, select, button {
    font: 400 1.6rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
