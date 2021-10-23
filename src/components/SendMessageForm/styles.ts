import styled, { css } from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.section`
  ${({ theme }) => css`
    width: 100%;
    padding: 2.4rem;
    background: ${theme.colors['black-720']};

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    position: relative;

    > button {
      border: none;
      background: transparent;
      font-size: 0;
      transition: filter 0.2s ease-in-out;

      position: absolute;
      top: 2.4rem;
      left: 2.4rem;

      > svg {
        width: 3.2rem;
        height: 3.2rem;
        color: ${theme.colors['gray-150']};
      }

      &:hover {
        filter: brightness(0.9);
      }
    }
  `}
`;

export const Profile = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    div:nth-child(1) {
      padding: 3px;
      border-radius: 50%;
      background: linear-gradient(to right, #ff008e, #ff7a29, #ffcd1e);
      line-height: 0;

      img {
        width: 9.4rem;
        height: 9.4rem;
        border-radius: 50%;
        border: 6px solid ${theme.colors['black-800']};
      }
    }

    strong {
      font-weight: bold;
      font-size: ${theme.fontSize.large};
      color: ${theme.colors['gray-100']};
      margin-top: 1.6rem;
    }

    div {
      margin-top: 0.8rem;
      display: flex;
      align-items: center;

      svg {
        width: 1.6rem;
        height: 1.6rem;
        color: ${theme.colors['gray-150']};
        margin-right: 0.8rem;
      }

      span {
        font-size: ${theme.fontSize.tiny};
        color: ${theme.colors['gray-150']};
        line-height: 1.4rem;
      }
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    margin-top: 4.8rem;
    background: ${theme.colors['black-700']};

    display: flex;
    flex-direction: column;
    align-self: stretch;

    label {
      width: 100%;
      padding: 1.8rem 2.4rem;
      text-align: left;
      font-weight: bold;
      font-size: ${theme.fontSize.default};
      color: ${theme.colors['gray-150']};
      background: ${theme.colors['gray-900']};
    }

    textarea {
      border: none;
      padding: 2.4rem;
      background: transparent;
      resize: none;
      height: 16rem;
      line-height: 2.4rem;
      color: ${theme.colors['gray-100']};

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: ${theme.colors['gray-400']};
      }
    }

    button {
      max-width: 194px;
      width: 100%;
      height: 4rem;
      margin: 2.4rem;
      border: none;
      align-self: flex-end;
      font-weight: bold;
      text-transform: uppercase;
      font-size: ${theme.fontSize.tiny};
      color: ${theme.colors.white};
      background: ${theme.colors['pink-500']};

      display: flex;
      align-items: center;
      justify-content: center;
      transition: filter 0.2s ease-in-out;

      &:hover {
        filter: brightness(0.9);
      }
    }
  `}
`;
