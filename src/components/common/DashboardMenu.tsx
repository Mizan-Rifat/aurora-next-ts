'use client';

import { MouseEvent, useState } from 'react';
import { Button, Menu, MenuItem, MenuItemProps } from '@mui/material';
import EllipsisHorizontalIcon from 'components/icons/EllipsisHorizontalIcon';

interface DashboardMenuProps {
  menuItems?: ({
    label: string;
  } & MenuItemProps)[];
}

const defaultItems: DashboardMenuProps['menuItems'] = [
  {
    label: 'Sync'
  },
  {
    label: 'Export'
  },
  {
    label: 'Remove',
    sx: { color: 'error.main' }
  }
];

const DashboardMenu = ({ menuItems = defaultItems }: DashboardMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        sx={{ color: 'text.primary' }}
        shape="square"
        aria-label="more"
        id="action-button"
        aria-controls={open ? 'actions-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <EllipsisHorizontalIcon />
      </Button>

      <Menu
        id="actions-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        sx={{
          '& .MuiMenu-paper': {
            borderRadius: 1,
            '.MuiList-root': {
              minWidth: 120
            }
          }
        }}
        MenuListProps={{
          'aria-labelledby': 'action-button'
        }}
      >
        {menuItems.map(({ label, onClick, ...rest }) => (
          <MenuItem
            key={label}
            onClick={e => {
              if (onClick) {
                onClick(e);
              }
              handleClose();
            }}
            {...rest}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DashboardMenu;
