import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

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
      <ToastContainer autoClose={3000} />
    </ThemeProvider>
  );
}
