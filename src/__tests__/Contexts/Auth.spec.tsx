import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import { AuthProvider, useUser } from '../../Contexts/Auth';
import { api } from '../../services/api';

const apiMock = new MockAdapter(api);

describe('Auth context', () => {
  it('should be able to sign in', async () => {
    const apiResponse = {
      user: {
        id: 'fake-use-id',
        name: 'John Doe',
        avatar_url: 'fake-avatar-url',
        login: 'fake-user-login',
      },
      token: 'fake-token123',
    };

    apiMock.onPost('authenticate').replyOnce(200, apiResponse);

    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const { result, waitForNextUpdate } = renderHook(() => useUser(), {
      wrapper: AuthProvider,
    });

    result.current.signIn('fake-github-code');

    await waitForNextUpdate();

    expect(setItemSpy).toHaveBeenCalledWith(
      '@nlw-heat:token',
      apiResponse.token,
    );
    expect(result.current.user?.name).toBe('John Doe');
    expect(result.current.user?.login).toBe('fake-user-login');
  });

  it('should restore saved data from storage when inits application', async () => {
    const profileApiResponse = {
      id: 'fake-use-id',
      name: 'John Doe',
      avatar_url: 'fake-avatar-url',
      login: 'fake-user-login',
    };

    jest.spyOn(Storage.prototype, 'getItem').mockImplementationOnce(key => {
      switch (key) {
        case '@nlw-heat:token':
          return 'fake-token123';
        default:
          return null;
      }
    });

    apiMock.onGet('profile').replyOnce(200, profileApiResponse);

    const { result, waitForNextUpdate } = renderHook(() => useUser(), {
      wrapper: AuthProvider,
    });

    await waitForNextUpdate();

    expect(result.current.user?.name).toBe(profileApiResponse.name);
  });

  it('should be able to sign out', async () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementationOnce(key => {
      switch (key) {
        case '@nlw-heat:token':
          return 'fake-token123';
        default:
          return null;
      }
    });

    const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');

    const { result } = renderHook(() => useUser(), {
      wrapper: AuthProvider,
    });

    act(() => {
      result.current.signOut();
    });

    expect(removeItemSpy).toHaveBeenCalledWith('@nlw-heat:token');
    expect(result.current.user).toBe(null);
  });
});
