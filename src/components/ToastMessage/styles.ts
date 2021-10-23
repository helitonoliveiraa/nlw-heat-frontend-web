import styled, { css } from 'styled-components';

type StatusMessage = {
  error?: boolean;
  success?: boolean;
};

export const Container = styled.div<StatusMessage>`
  ${({ theme, success, error }) => css`
    display: flex;
    align-items: center;
    gap: 0.4rem;

    svg {
      width: 2.4rem;
      height: 2.4rem;
      color: ${error ? theme.colors['red-700'] : theme.colors['green-400']};
    }

    span {
      color: ${theme.colors['pink-500']};
    }
  `}
`;
