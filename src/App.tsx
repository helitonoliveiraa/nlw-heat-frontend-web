import { ThemeProvider } from 'styled-components';

import { Dashboard } from './pages/dashboard';

import { light } from './styles/themes';
import GlobalStyles from './styles/global';

export function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  );
}
