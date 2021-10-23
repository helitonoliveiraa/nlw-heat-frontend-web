import { ThemeProvider } from 'styled-components';

import { Dashboard } from './pages/dashboard';

import { light } from './styles/themes';
import GlobalStyles from './styles/global';
import { AuthProvider } from './Contexts/Auth';

export function App() {
  return (
    <ThemeProvider theme={light}>
      <AuthProvider>
        <GlobalStyles />
        <Dashboard />
      </AuthProvider>
    </ThemeProvider>
  );
}
