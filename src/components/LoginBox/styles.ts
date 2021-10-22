import styled, { css } from 'styled-components';

import backgroundBanner from '../../assets/dashboard-banner.png';

export const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    background: ${theme.colors['black-750']} url(${backgroundBanner}) no-repeat
      center top;

    padding: 440px 80px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    strong {
      font-size: ${theme.fontSize.big};
      color: ${theme.colors['gray-100']};
      line-height: 3.2rem;
    }

    a {
      margin: 3.2rem auto 0;
      max-width: 258px;
      width: 100%;
      height: 56px;
      font-weight: bold;
      text-transform: uppercase;
      font-size: ${theme.fontSize.tiny};
      color: ${theme.colors['blak-900']};
      background: ${theme.colors['yellow-400']};

      display: flex;
      align-items: center;
      justify-content: center;
      transition: filter 0.2s ease-in-out;

      &:hover {
        filter: brightness(0.9);
      }

      svg {
        width: 2.4rem;
        height: 2.4rem;
        margin-right: 1.2rem;
      }
    }
  `}
`;
