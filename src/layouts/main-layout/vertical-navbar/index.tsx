import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import { useSettingsContext } from 'providers/SettingsProvider';
import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from '@mui/material';
import sitemap from 'routes/sitemap';
import SimpleBar from 'simplebar-react';
import NavItem from './NavItem';
import NavbarVerticalProvider from './NavbarVericalProvider';
import { grey } from 'theme/colors';
import { useTheme } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import Logo from 'components/common/Logo';

const VerticalNavbar = () => {
  const {
    config: { navbarVerticalCollapsed, drawerWidth, minimizedLayoutBreakpoint, openNavbarDrawer },
    setConfig,
    toggleNavbarCollapse
  } = useSettingsContext();

  const toggleNavbarDrawer = () => {
    setConfig({
      openNavbarDrawer: !openNavbarDrawer
    });
  };

  const drawer = (
    <>
      <Toolbar
        variant="appbar"
        sx={[
          {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          },
          navbarVerticalCollapsed && {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          },
          !navbarVerticalCollapsed && {
            pl: { xs: 4, md: 6 },
            pr: { xs: 2, md: 3 }
          }
        ]}
      >
        <Logo showName={!navbarVerticalCollapsed} />
        <IconButton sx={{ mt: 1, display: { md: 'none' } }} onClick={toggleNavbarDrawer}>
          <IconifyIcon icon="material-symbols:left-panel-close-outline" fontSize={20} />
        </IconButton>
      </Toolbar>

      <Box sx={{ flex: 1, overflow: 'hidden' }}>
        <SimpleBar style={{ height: '100%' }}>
          <Box
            sx={[
              {
                py: 2
              },
              navbarVerticalCollapsed && {
                px: 2
              },
              !navbarVerticalCollapsed && {
                px: { xs: 2, md: 4 }
              }
            ]}
          >
            {sitemap.map((menu, index) => (
              <List
                dense
                key={menu.id}
                sx={{ mb: index !== sitemap.length - 1 ? 3 : 0, pb: 0 }}
                subheader={
                  menu.subheader && (
                    <ListSubheader
                      component="div"
                      disableGutters
                      sx={{
                        textAlign: navbarVerticalCollapsed ? 'center' : 'left',
                        color: 'text.primary',
                        fontSize: '12px',
                        lineHeight: 1.2,
                        fontWeight: 700,
                        py: 1,
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                        paddingLeft: navbarVerticalCollapsed ? 0 : 2,
                        mb: 0.25
                      }}
                    >
                      {menu.subheader}
                    </ListSubheader>
                  )
                }
              >
                {menu.items.map(item => (
                  <NavItem key={item.pathName} item={item} level={0} />
                ))}
              </List>
            ))}
          </Box>{' '}
        </SimpleBar>
      </Box>
    </>
  );

  const theme = useTheme();

  return (
    <NavbarVerticalProvider>
      <Box
        component="nav"
        sx={[
          {
            width: { [minimizedLayoutBreakpoint]: drawerWidth },
            flexShrink: { sm: 0 },
            transition: {
              xs: theme.transitions.create(['width'], {
                duration: theme.transitions.duration.standard
              }),
              lg: 'none'
            },
            position: { md: 'absolute', lg: 'static' }
          }
        ]}
      >
        <Drawer
          variant="temporary"
          open={openNavbarDrawer}
          onClose={toggleNavbarDrawer}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', [minimizedLayoutBreakpoint]: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              borderColor: grey[300]
            }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', [minimizedLayoutBreakpoint]: 'flex' },
            flexDirection: 'column',
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              borderColor: grey[300],
              transition: {
                xs: theme.transitions.create(['width'], {
                  duration: theme.transitions.duration.standard
                }),
                lg: 'none'
              }
            }
          }}
          open
        >
          {drawer}
          <Divider />
          <Toolbar variant="dense" sx={{ padding: '0 !important', height: 56 }}>
            <ListItem disablePadding sx={{ height: 1, width: 1 }}>
              <ListItemButton
                sx={[
                  { height: 1, width: 1, borderRadius: 0 },
                  navbarVerticalCollapsed && {
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 1
                  },
                  !navbarVerticalCollapsed &&
                    (theme => ({
                      minWidth: 180,
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      textAlign: 'left',
                      p: theme.spacing(0.75, 5.75)
                    }))
                ]}
                onClick={toggleNavbarCollapse}
              >
                <ListItemIcon
                  sx={{
                    fontSize: navbarVerticalCollapsed ? 24 : 16
                  }}
                >
                  {navbarVerticalCollapsed ? (
                    <IconifyIcon icon="material-symbols:left-panel-open-outline" />
                  ) : (
                    <IconifyIcon icon="material-symbols:left-panel-close-outline" />
                  )}
                </ListItemIcon>

                {!navbarVerticalCollapsed && (
                  <Box
                    sx={{
                      flex: 1,
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <ListItemText
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontSize: navbarVerticalCollapsed ? 12 : 14
                        }
                      }}
                    >
                      {navbarVerticalCollapsed ? 'Expand' : 'Collapse'}
                    </ListItemText>
                  </Box>
                )}
              </ListItemButton>
            </ListItem>
          </Toolbar>
        </Drawer>
      </Box>
    </NavbarVerticalProvider>
  );
};

export default VerticalNavbar;
