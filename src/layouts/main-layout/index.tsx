'use client';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useSettingsContext } from 'providers/SettingsProvider';
import VerticalNavbar from 'layouts/main-layout/vertical-navbar';
import AppBar from 'layouts/main-layout/app-bar';
import Footer from './footer';
import { PropsWithChildren } from 'react';
import { Backdrop } from '@mui/material';
import { useBreakpoints } from 'providers/BreakpointsProvider';

const MainLayout = ({ children }: PropsWithChildren) => {
  const {
    config: { drawerWidth, minimizedLayoutBreakpoint, navbarVerticalCollapsed },
    toggleNavbarCollapse
  } = useSettingsContext();

  const { between } = useBreakpoints();

  const downLayoutBreakpoint = between(minimizedLayoutBreakpoint, 'lg');

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar />
      <VerticalNavbar />

      <Box
        component="main"
        sx={[
          {
            flexGrow: 1,
            p: 0,
            minHeight: '100vh',
            width: { xs: '100%', [minimizedLayoutBreakpoint]: `calc(100% - ${drawerWidth}px)` },

            display: 'flex',
            flexDirection: 'column',
            marginLeft: { md: '136px', lg: 0 }
          }
          // !navbarVerticalCollapsed && {
          //   marginLeft: { md: '136px', lg: 0 },
          // },
        ]}
      >
        <Toolbar variant="appbar" />
        {/* <Outlet /> */}
        <Box sx={{ flex: 1 }}>
          {children}

          {downLayoutBreakpoint && (
            <Backdrop
              sx={{ zIndex: theme => theme.zIndex.appBar + 1 }}
              open={!navbarVerticalCollapsed}
              onClick={toggleNavbarCollapse}
            />
          )}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default MainLayout;
