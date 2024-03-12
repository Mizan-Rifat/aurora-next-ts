import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import paths, { rootPaths } from './paths';
import PageLoader from 'components/loading/PageLoader';
import Splash from 'components/loading/Splash';

const App = lazy(() => import('App'));
const MainLayout = lazy(() => import('layouts/main-layout'));
const AuthLayout = lazy(() => import('layouts/auth-layout'));
const Starter = lazy(() => import('pages/others/Starter'));
const ComingSoon = lazy(() => import('pages/others/ComingSoon'));
const ECommerce = lazy(() => import('pages/dashboards/ECommerce'));
const Login = lazy(() => import('pages/authentication/default/Login'));
const Signup = lazy(() => import('pages/authentication/default/Signup'));
const ForgotPassword = lazy(() => import('pages/authentication/default/ForgotPassword'));
const TwoFA = lazy(() => import('pages/authentication/default/TwoFA'));
const Page404 = lazy(() => import('pages/errors/Page404'));

export const routes = [
  {
    element: (
      <Suspense fallback={<Splash />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            index: true,
            element: <ECommerce />,
          },
          {
            path: paths.starter,
            element: <Starter />,
          },
          {
            path: paths.comingSoon,
            element: <ComingSoon />,
          },
        ],
      },
      {
        path: rootPaths.authRoot,
        element: <AuthLayout />,
        children: [
          {
            path: paths.login,
            element: <Login />,
          },
          {
            path: paths.signup,
            element: <Signup />,
          },
          {
            path: paths.forgotPassword,
            element: <ForgotPassword />,
          },
          {
            path: paths['2FA'],
            element: <TwoFA />,
          },
        ],
      },
      {
        path: '*',
        element: <Page404 />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
