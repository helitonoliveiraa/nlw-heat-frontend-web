import {
 render, screen, fireEvent, waitFor
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import {} from '../../Contexts/Auth';
import { light } from '../../styles/themes';
import { LoginBox } from '../../components/LoginBox';

describe('LoginBox component', () => {
  it('should be able to render correctly', () => {
    render(
      <ThemeProvider theme={light}>
        <LoginBox />
      </ThemeProvider>,
    );

    expect(screen.getByText('Entrar com Github')).toBeInTheDocument();
  });

  it('should be able to redirect to SendMessageForm', async () => {
    render(
      <ThemeProvider theme={light}>
        <LoginBox />
      </ThemeProvider>,
    );

    const signInButton = screen.getByText('Entrar com Github');

    fireEvent.click(signInButton);

    // expect(screen.getByText('Entrar com Github').closest('a')?.href).toBe(
    //   'https://github.com/login/oauth/authorize?scope=user&client_id=',
    // );
  });
});
