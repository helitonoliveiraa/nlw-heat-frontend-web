import styled, { css, keyframes } from 'styled-components';

import backgroundImg from '../assets/background.svg';

type ContainerProps = {
  isImgBackground: boolean;
};

export const Container = styled.main<ContainerProps>`
  ${({ theme, isImgBackground }) => css`
    max-width: 1200px;
    height: 100vh;
    margin: 0 auto;
    padding: 0 3.2rem;

    display: grid;
    grid-template-columns: 1fr 453px;
    column-gap: 120px;
    position: relative;

    ${isImgBackground &&
    css`
      &::before {
        content: '';
        height: 100vh;
        width: 420px;
        background: url(${backgroundImg}) no-repeat;
        background-size: cover;
        position: absolute;
        right: -160px;
        top: 0;
      }
    `}
  `}
`;
