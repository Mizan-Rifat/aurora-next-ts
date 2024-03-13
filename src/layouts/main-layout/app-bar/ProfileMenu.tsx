import {
  Box,
  Button,
  Divider,
  Link,
  ListItemIcon,
  MenuItem,
  MenuItemProps,
  Stack,
  Switch,
  Typography
} from '@mui/material';
import avatar14 from 'assets/avatar/avatar_14.webp';
import { PropsWithChildren, useState } from 'react';
import Menu from '@mui/material/Menu';
import IconifyIcon from 'components/base/IconifyIcon';
import StatusAvatar from 'components/base/StatusAvatar';

interface ProfileMenuItemProps extends MenuItemProps {
  icon: string;
  href?: string;
}

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [darkMode, setDarkMode] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  return (
    <>
      <Button
        color="neutral"
        variant="text"
        shape="circle"
        onClick={handleClick}
        sx={{
          height: 44,
          width: 44
        }}
      >
        <StatusAvatar
          alt="Captain Haddock"
          status="online"
          src={avatar14.src}
          sx={{ width: 36, height: 36 }}
        />
      </Button>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        sx={{
          '& .MuiPaper-root': { minWidth: 360 },
          '& .MuiList-root': { py: 0 }
        }}
      >
        <Stack sx={{ px: 3, py: 2 }} alignItems="center" gap={2}>
          <StatusAvatar
            status="online"
            alt="Captain Haddock"
            src={avatar14.src}
            sx={{ width: 48, height: 48 }}
          />
          <Box>
            <Typography variant="h6" fontWeight="medium" mb={0.5}>
              Captain Haddock
            </Typography>
            <Typography color="text.secondary" variant="subtitle2">
              Merchant Captain
              <IconifyIcon
                icon="material-symbols-light:diamond-rounded"
                color="warning.main"
                sx={{ verticalAlign: 'text-bottom', ml: 0.5 }}
              />
            </Typography>
          </Box>
        </Stack>
        <Divider />
        <Box sx={{ py: 2 }}>
          <ProfileMenuItem
            icon="material-symbols-light:accessible-forward-rounded"
            onClick={handleClose}
          >
            Accessibility
          </ProfileMenuItem>

          <ProfileMenuItem icon="material-symbols-light:help-outline-rounded" onClick={handleClose}>
            Preferences
          </ProfileMenuItem>

          <ProfileMenuItem
            onClick={() => toggleDarkMode(!darkMode)}
            icon="material-symbols-light:dark-mode-outline-rounded"
          >
            Dark mode
            <Switch
              checked={darkMode}
              onChange={e => toggleDarkMode(e.target.checked)}
              sx={{ ml: 'auto' }}
            />
          </ProfileMenuItem>
        </Box>
        <Divider />
        <Box sx={{ py: 2 }}>
          <ProfileMenuItem
            icon="material-symbols-light:settings-account-box-outline-rounded"
            onClick={handleClose}
            href="#!"
          >
            Account Settings
          </ProfileMenuItem>
          <ProfileMenuItem
            icon="material-symbols-light:help-outline-rounded"
            onClick={handleClose}
            href="#!"
          >
            Help Center
          </ProfileMenuItem>
        </Box>
        <Divider />
        <Box sx={{ py: 1 }}>
          <ProfileMenuItem
            onClick={handleClose}
            icon="material-symbols-light:logout-rounded"
            sx={theme => ({ color: theme.palette.error.main })}
          >
            Sign Out
          </ProfileMenuItem>
        </Box>
      </Menu>
    </>
  );
};

const ProfileMenuItem = ({
  icon,
  onClick,
  children,
  href,
  ...rest
}: PropsWithChildren<ProfileMenuItemProps>) => {
  const linkProps = href ? { component: Link, href, underline: 'none' } : {};
  return (
    <MenuItem onClick={onClick} {...linkProps} {...rest}>
      <ListItemIcon sx={{ '&.MuiListItemIcon-root': { minWidth: 32 } }}>
        <IconifyIcon icon={icon} sx={{ fontSize: 24 }} />
      </ListItemIcon>
      {children}
    </MenuItem>
  );
};

export default ProfileMenu;
