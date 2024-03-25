import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useSettingsContext } from 'providers/SettingsProvider';
import { Box, Button, Divider, Stack } from '@mui/material';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import { grey } from 'theme/colors';
import OutlinedBadge from 'components/styled/OutlinedBadge';
import ProfileMenu from './ProfileMenu';
import LanguageMenu from './LanguageMenu';
import IconifyIcon from 'components/base/IconifyIcon';
import SearchBox from './search-box/SearchBox';
import Logo from 'components/common/Logo';

export default function AppBar() {
  const {
    config: { drawerWidth, minimizedLayoutBreakpoint },
    handleDrawerToggle,
  } = useSettingsContext();

  const { useUp } = useBreakpoints();

  return (
    <MuiAppBar
      position="fixed"
      sx={{
        width: { [minimizedLayoutBreakpoint]: `calc(100% - ${drawerWidth}px)` },
        ml: { [minimizedLayoutBreakpoint]: `${drawerWidth}px` },
        '&.MuiPaper-root': {
          outline: 'none',
        },
      }}
    >
      <Toolbar variant="appbar" sx={{ px: { xs: 3, md: 5 } }}>
        <Box
          sx={{
            display: { xs: 'flex', [minimizedLayoutBreakpoint]: 'none' },
            alignItems: 'center',
            gap: 1,
            pr: 2,
            mr: 1,
            borderRight: 1,
            borderColor: grey[300],
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <IconifyIcon icon="material-symbols:menu-rounded" sx={{ fontSize: 20 }} />
          </IconButton>

          <Logo showName={useUp('sm')} />
        </Box>

        <Stack alignItems="center" flex={1}>
          <SearchBox />

          <Stack alignItems="center" spacing={1} sx={{ ml: 'auto' }}>
            <LanguageMenu />

            <Button color="neutral" variant="soft" shape="circle">
              <IconifyIcon
                icon="material-symbols-light:dark-mode-outline-rounded"
                sx={{ fontSize: 22 }}
              />
            </Button>

            <OutlinedBadge color="warning" overlap="circular" badgeContent="1">
              <Button color="neutral" variant="soft" shape="circle">
                <IconifyIcon
                  icon="material-symbols-light:notifications-outline-rounded"
                  sx={{ fontSize: 22 }}
                />
              </Button>
            </OutlinedBadge>

            <ProfileMenu />
          </Stack>
        </Stack>
      </Toolbar>
      <Divider />
    </MuiAppBar>
  );
}
