'use client';

import { Button, ListItemIcon, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import { ListItemText } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

const languages = [
  {
    label: 'English',
    shortLabel: 'eng',
    icon: 'twemoji:flag-united-kingdom'
  },
  {
    label: 'Française',
    shortLabel: 'fra',
    icon: 'twemoji:flag-france'
  },
  {
    label: 'বাংলা',
    shortLabel: 'ben',
    icon: 'twemoji:flag-bangladesh'
  },
  {
    label: '官话',
    shortLabel: 'zho',
    icon: 'twemoji:flag-china'
  },
  {
    label: 'हिन्दी',
    shortLabel: 'hin',
    icon: 'twemoji:flag-india'
  },
  {
    label: 'Arabic',
    shortLabel: 'ara',
    icon: 'twemoji:flag-saudi-arabia'
  }
];

const LanguageMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button color="neutral" variant="text" shape="circle" onClick={handleClick}>
        <IconifyIcon icon={selectedLanguage.icon} sx={{ fontSize: 24 }} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        id="language-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        sx={{ minWidth: 260 }}
      >
        {languages.map(language => (
          <MenuItem
            key={language.shortLabel}
            onClick={() => {
              setSelectedLanguage(language);
            }}
            sx={{ minWidth: 260, px: 2 }}
          >
            <ListItemIcon>
              <IconifyIcon icon={language.icon} sx={{ fontSize: 24 }} />
            </ListItemIcon>
            <ListItemText primary={language.label} />
            <Typography variant="subtitle2" color="text.secondary" fontWeight="normal">
              {language.shortLabel}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageMenu;
