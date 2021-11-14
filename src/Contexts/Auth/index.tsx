import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../../services/api';

type User = {
  id: string;
  name: string;
  avatar_url: string;
  login: string;
};

type SignInResponse = {
  token: string;
  user: User;
};

type AuthContextData = {
  user: User | null;
  signInUrl: string;
  isAuthenticated: boolean;
  signOut: () => void;
  signIn: (githubCode: string) => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const clientId = '25cf3bb86c08f2008eae';

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${clientId}`;

  async function signIn(githubCode: string) {
    const response = await api.post<SignInResponse>('authenticate', {
      code: githubCode,
    });

    const { token, user: userResponse } = response.data;

    localStorage.setItem('@nlw-heat:token', token);

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    setUser(userResponse);
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem('@nlw-heat:token');
  }

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes('?code=');

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=');

      window.history.pushState({}, '', urlWithoutCode);

      try {
        signIn(githubCode);
      } catch (err) {
        console.log('falha no login: ', err);
      }
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('@nlw-heat:token');

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      api.get<User>('profile').then(response => {
        setUser(response.data);
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signInUrl,
        signOut,
        signIn,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useUser() {
  const context = useContext(AuthContext);

  return context;
}
