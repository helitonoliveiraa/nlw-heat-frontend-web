import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    background: ${({ theme }) => theme.colors['blak-800']};
    color: ${({ theme }) => theme.colors['gray-100']};
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

  li {
    list-style: none;
  }
`;
