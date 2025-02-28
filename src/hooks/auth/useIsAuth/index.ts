import { useAuth } from '../useAuth';

export const useIsAuth = () => {
  // This is a dummy implementation. Replace it with your own authentication logic.
  useAuth();
  const isTokenExpired = false;

  const isAuthenticated = {
    data: false,
    isAuthData: false,
    isTokenExpired,
    userId: false,
  };

  return isAuthenticated;
};
