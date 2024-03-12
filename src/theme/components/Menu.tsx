import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Menu: Components<Omit<Theme, 'components'>>['MuiMenu'] = {
  defaultProps: {
    slotProps: {
      paper: {
        variant: 'elevation',
        elevation: 3,
      },
    },
  },
};

export const MenuItem: Components<Omit<Theme, 'components'>>['MuiMenuItem'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      padding: '10px 12px',
    },
  },
};

export default Menu;
