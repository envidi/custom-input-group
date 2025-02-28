import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router';
import { toast } from 'react-toastify';
import { useIsAuth } from '~root/hooks/auth/useIsAuth';

interface Props {
  element: React.ReactElement;
}

export const PrivateRoute = ({ element }: Props) => {
  const { t } = useTranslation('');
  const { isTokenExpired, data } = useIsAuth();
  if (isTokenExpired) {
    if (data) {
      toast(t('sessionExpired'), {
        toastId: 'session-expired',
      });
    }
    return <Navigate to="/auth/login" replace />;
  }
  return element;
};
