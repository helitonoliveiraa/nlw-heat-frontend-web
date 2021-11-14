import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import { light } from '../../styles/themes';
import { LoginBox } from '.';

describe('LoginBox component', () => {
  it('renders correctly', () => {
    render(
      <ThemeProvider theme={light}>
        <LoginBox />
      </ThemeProvider>,
    );

    expect(screen.getByText('Entrar com Github')).toBeInTheDocument();
  });
});
