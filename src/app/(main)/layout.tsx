import IconifyIcon from 'components/base/IconifyIcon';
import MainLayout from 'layouts/main-layout';
import React from 'react';
import { Icon } from '@iconify/react';

const Layout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <MainLayout>
      {/* <Icon icon="mdi-light:home" /> */}
      {children}
    </MainLayout>
  );
};

export default Layout;
