import { Suspense } from 'react';
import Splash from 'components/loading/Splash';

const AuthLayout = () => {
  return <Suspense fallback={<Splash />}></Suspense>;
};

export default AuthLayout;
