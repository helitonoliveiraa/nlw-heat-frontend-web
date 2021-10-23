import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: flex-start;

  > svg {
    height: 2.8rem;
    margin: 3.2rem 0;
  }
`;

export const MessageWrapper = styled.ul`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  flex: 1;

  > div {
    align-self: center;
  }
`;

export const MessageContainer = styled.li`
  ${({ theme }) => css`
    max-width: 440px;
    width: 100%;

    &:nth-child(2) {
      margin-left: 7rem;
    }

    P {
      font-size: ${theme.fontSize.default};
      color: ${theme.colors['gray-100']};
      line-height: 2.8rem;
    }
  `}
`;

export const UserContainer = styled.div`
  ${({ theme }) => css`
    margin-top: 1.6rem;
    display: flex;
    align-items: center;

    div {
      padding: 2px;
      border-radius: 50%;
      background: linear-gradient(to right, #ff008e, #ff7a29, #ffcd1e);
      line-height: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 3.4rem;
        height: 3.4rem;
        border-radius: 50%;
        border: 4px solid ${theme.colors['black-800']};
      }
    }

    span {
      display: block;
      line-height: 2.4rem;
      margin-left: 1.2rem;
    }
  `}
`;
