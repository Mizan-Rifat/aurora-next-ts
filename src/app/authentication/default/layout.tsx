import DefaultAuthLayout from 'layouts/auth-layout/DefaultAuthLayout';
import MainLayout from 'layouts/main-layout';
import React from 'react';

const Layout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <DefaultAuthLayout>{children}</DefaultAuthLayout>;
};

export default Layout;
